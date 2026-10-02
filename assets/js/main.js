const page = document.body.dataset.page || 'home';
const phoneDisplay = '0314-0725738';
const phoneTel = '+923140725738';

function brand(){
  return `<a class="brand" href="index.html" aria-label="DSI Hospital home"><img class="brand-logo" src="assets/images/dsi-logo.jfif" alt="DSI Hospital logo"></a>`;
}

const navItems = [
  ['home','Home','index.html'],['about','About Us','about.html'],['doctors','Doctors','doctors.html'],
  ['departments','Departments','departments.html'],['services','Services','services.html'],
  ['guide','Patient Guide','patient-guide.html'],['contact','Contact','contact.html']
];

function renderHeader(){
  const top = `<div class="topbar"><div class="container"><div class="top-items">
    <span class="top-pill">⌖ A-1, Block 4, Gulistan-e-Johar, Karachi</span>
    <a class="top-pill" href="tel:${phoneTel}">☎ ${phoneDisplay}</a>
  </div><div class="top-items"><span class="top-pill">Patient enquiries & appointments</span></div></div></div>`;
  const links = navItems.map(([id,label,url])=>`<a class="${page===id?'active':''}" href="${url}">${label}</a>`).join('');
  document.getElementById('site-header').innerHTML = `${top}<div class="site-header"><div class="container navbar">${brand()}<nav class="nav-links" id="navLinks">${links}</nav><a class="header-cta" href="appointment.html">▣ Book Appointment</a><button class="mobile-toggle" id="mobileToggle" aria-label="Open menu">☰</button></div></div>`;
  document.getElementById('mobileToggle')?.addEventListener('click',()=>document.getElementById('navLinks').classList.toggle('open'));
}

function renderFooter(){
  document.getElementById('site-footer').innerHTML = `<footer class="footer"><div class="container footer-main">
    <div>${brand()}<p style="margin-top:20px">A patient-friendly hospital website concept for DSI Hospital, Gulistan-e-Johar, Karachi.</p><p class="footer-note">Website demo: doctor rosters, clinical timings and department availability must be confirmed by hospital administration before publication.</p></div>
    <div><h4>Quick Links</h4><div class="footer-links"><a href="about.html">About Us</a><a href="doctors.html">Doctors</a><a href="departments.html">Departments</a><a href="appointment.html">Book Appointment</a></div></div>
    <div><h4>Patient Care</h4><div class="footer-links"><a href="services.html">Services</a><a href="patient-guide.html">Patient Guide</a><a href="contact.html">Contact Us</a><a href="tel:${phoneTel}">Call Hospital</a></div></div>
    <div><h4>Contact</h4><div class="footer-links"><span>A-1, Block 4, Gulistan-e-Johar, Karachi, Pakistan</span><a href="tel:${phoneTel}">${phoneDisplay}</a><span>For urgent medical emergencies, use your local emergency service.</span></div></div>
  </div><div class="container footer-bottom"><span>© ${new Date().getFullYear()} DSI Hospital. Website concept/demo.</span><span>Designed for fast mobile access • Accessible • Responsive</span></div></footer>`;
}

function bindForms(){
  document.querySelectorAll('form[data-demo-form]').forEach(form=>{
    form.addEventListener('submit',e=>{
      e.preventDefault();
      const alert=form.querySelector('.alert');
      const data=Object.fromEntries(new FormData(form).entries());
      const key=form.dataset.demoForm==='appointment'?'dsiAppointments':'dsiMessages';
      const items=JSON.parse(localStorage.getItem(key)||'[]');
      items.push({...data,createdAt:new Date().toISOString()});
      localStorage.setItem(key,JSON.stringify(items));
      alert.className='alert success';
      alert.textContent=form.dataset.demoForm==='appointment'
        ? 'Appointment request saved in this browser. Connect this form to your hospital system or email before going live.'
        : 'Message saved in this browser. Connect the contact form to email/API before going live.';
      form.reset();
    });
  });
}

function bindFaq(){
  document.querySelectorAll('.faq-q').forEach(btn=>btn.addEventListener('click',()=>btn.closest('.faq-item').classList.toggle('open')));
}

document.addEventListener('DOMContentLoaded',()=>{renderHeader();renderFooter();bindForms();bindFaq();});


