const page = document.body.dataset.page || 'home';
const phoneDisplay = '0314-0725738';
const phoneTel = '+923140725738';
const landlineDisplay = '021-34016615';
const landlineTel = '+922134016615';
const email = 'dsi.hospital@gmail.com';
const address = 'A-1, Block 4, Gulistan-e-Jauhar, Karachi';
const whatsapp = 'https://wa.me/923140725738';

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
    <span class="top-pill">⌖ ${address}</span>
    <a class="top-pill" href="tel:${phoneTel}">☎ ${phoneDisplay}</a>
    <a class="top-pill" href="tel:${landlineTel}">☎ ${landlineDisplay}</a>
  </div><div class="top-items"><span class="top-pill">✚ 24/7 Emergency & Gynae/Obs Emergency</span></div></div></div>`;
  const links = navItems.map(([id,label,url])=>`<a class="${page===id?'active':''}" href="${url}">${label}</a>`).join('');
  document.getElementById('site-header').innerHTML = `${top}<div class="site-header"><div class="container navbar">${brand()}<nav class="nav-links" id="navLinks">${links}</nav><a class="header-cta" href="appointment.html">▣ Book Appointment</a><button class="mobile-toggle" id="mobileToggle" aria-label="Open menu">☰</button></div></div>`;
  document.getElementById('mobileToggle')?.addEventListener('click',()=>document.getElementById('navLinks').classList.toggle('open'));
}

function renderFooter(){
  document.getElementById('site-footer').innerHTML = `<footer class="footer"><div class="container footer-main">
    <div>${brand()}<p style="margin-top:20px">DSI Hospital, Gulistan-e-Jauhar, Karachi — where wellness begins. Private healthcare with 24/7 emergency, pharmacy and laboratory services.</p><p class="footer-note">Follow us:
      <a href="https://www.instagram.com/dsi_hospital/" target="_blank" rel="noopener" style="color:var(--blue)">Instagram</a> ·
      <a href="https://www.facebook.com/p/DSI-Hospital-61558665913517" target="_blank" rel="noopener" style="color:var(--blue)">Facebook</a> ·
      <a href="https://pk.linkedin.com/company/dsi-hospital" target="_blank" rel="noopener" style="color:var(--blue)">LinkedIn</a></p></div>
    <div><h4>Quick Links</h4><div class="footer-links"><a href="about.html">About Us</a><a href="doctors.html">Doctors</a><a href="departments.html">Departments</a><a href="appointment.html">Book Appointment</a></div></div>
    <div><h4>Patient Care</h4><div class="footer-links"><a href="services.html">Services</a><a href="patient-guide.html">Patient Guide</a><a href="contact.html">Contact Us</a><a href="tel:${phoneTel}">Call Hospital</a></div></div>
    <div><h4>Contact</h4><div class="footer-links"><span>${address}, Pakistan</span><a href="tel:${phoneTel}">${phoneDisplay} (WhatsApp)</a><a href="tel:${landlineTel}">${landlineDisplay}</a><a href="mailto:${email}">${email}</a><span>For medical emergencies, call us or visit the ER — open 24 hours.</span></div></div>
  </div><div class="container footer-bottom"><span>© ${new Date().getFullYear()} DSI Hospital, Gulistan-e-Jauhar, Karachi.</span><span>Where Wellness Begins • Open 24 Hours • Accessible • Responsive</span></div></footer>`;
}

function bindForms(){
  document.querySelectorAll('form[data-demo-form]').forEach(form=>{
    form.addEventListener('submit',e=>{
      e.preventDefault();
      const alert=form.querySelector('.alert');
      const data=Object.fromEntries(new FormData(form).entries());
      const key=form.dataset.demoForm==='appointment'?'dsiAppointments':'dsiMessages';
      try{
        const items=JSON.parse(localStorage.getItem(key)||'[]');
        items.push({...data,createdAt:new Date().toISOString()});
        localStorage.setItem(key,JSON.stringify(items));
      }catch(err){/* storage unavailable */}
      // Send the request to the hospital's official WhatsApp line
      const isAppointment=form.dataset.demoForm==='appointment';
      const lines=[];
      if(isAppointment){
        lines.push('Appointment request — DSI Hospital');
        lines.push(`Patient: ${data.patientName||'-'}`);
      }else{
        lines.push('Enquiry — DSI Hospital');
        lines.push(`Name: ${data.name||'-'}`);
      }
      lines.push(`Phone: ${data.phone||'-'}`);
      if(data.email) lines.push(`Email: ${data.email}`);
      if(data.date) lines.push(`Preferred date: ${data.date}`);
      if(data.department) lines.push(`Care area: ${data.department}`);
      if(data.time) lines.push(`Preferred time: ${data.time}`);
      if(data.reason) lines.push(`Reason: ${data.reason}`);
      if(data.message) lines.push(`Message: ${data.message}`);
      window.open(`${whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`,'_blank','noopener');
      alert.className='alert success';
      alert.textContent=isAppointment
        ? 'Opening WhatsApp with your appointment request. Press send to deliver it to DSI Hospital (0314-0725738), or call us directly.'
        : 'Opening WhatsApp with your message. Press send to deliver it to DSI Hospital (0314-0725738), or call us directly.';
      form.reset();
    });
  });
}

function bindFaq(){
  document.querySelectorAll('.faq-q').forEach(btn=>btn.addEventListener('click',()=>btn.closest('.faq-item').classList.toggle('open')));
}

document.addEventListener('DOMContentLoaded',()=>{renderHeader();renderFooter();bindForms();bindFaq();});
