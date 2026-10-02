# DSI Hospital Website

A complete responsive static website for **DSI Hospital**, Gulistan-e-Jauhar, Karachi — *"Where Wellness Begins"*.

## Pages
- `index.html` — Home
- `about.html` — About
- `doctors.html` — Doctors directory
- `departments.html` — Departments
- `services.html` — Patient services
- `patient-guide.html` — Patient guide + FAQ
- `contact.html` — Contact form + location
- `appointment.html` — Appointment request form

## Run locally
Open `index.html` in a browser, or run a simple local server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Hospital data used on the site
Verified from DSI Hospital's own public profiles and listings (checked October 2026):

- **Hospital:** DSI Hospital — private hospital established **2023**, open **24 hours**
- **Address:** A-1, Block 4, Gulistan-e-Jauhar, School Road, Karachi (Google Maps & Yandex listings)
- **Phone/WhatsApp:** 0314-0725738 · **Landline:** 021-34016615
- **Email:** dsi.hospital@gmail.com
- **Mission/Vision:** as published on the hospital's LinkedIn page
- **Departments/services:** from the hospital's official Instagram/Facebook posts — 24/7 Emergency, 24/7 Gynae & Obs emergency, Gynae & Obs, IVF & Fertility, NICU, Pediatrics, Cardiology, ENT, Urology, Aesthetic care, General Medicine/Internal Medicine OPD (9:00 AM–1:00 PM), Operation Theaters, 24-hour Pharmacy, 24-hour Laboratory, Ultrasound
- **Doctor:** Dr. Sheeba Irum — Consultant Gynaecologist & Medical Director (as quoted in Geo.tv's cervical-cancer feature, September 2025)
- **Images:** all photos/graphics in `assets/images/social/` are the hospital's own branded posts from its official Instagram (`@dsi_hospital`) — IVF, Operation Theaters, Cardiology, ENT, NICU, Gynae, Aesthetic, Urology, Pharmacy, Pediatrics graphics plus a real reception/OPD photograph. Stock/reposted images from the account were deliberately not used.

### Source links
- Instagram: https://www.instagram.com/dsi_hospital/
- Facebook: https://www.facebook.com/p/DSI-Hospital-61558665913517
- LinkedIn: https://pk.linkedin.com/company/dsi-hospital
- Google Maps: DSI Hospital, A-1, Block 4 Karachi, 75290
- Yandex Maps (hours): https://yandex.com/maps/org/dsi_hospital/10518514821
- Geo.tv article: https://www.geo.tv/latest/621658-silence-stigma-and-survival-the-hidden-face-of-cervical-cancer

## Still worth confirming with the hospital
- Full named consultant roster and individual OPD day/time schedules (the hospital has not published these publicly; the Doctors page uses the verified Medical Director plus department teams, and directs patients to call/WhatsApp for current schedules)
- Consultation fees (the Rs 199 OPD offer seen on social media was limited-time)
- Insurance/panel and admission policies

## Forms
The appointment and contact forms compose a pre-filled WhatsApp message to the hospital's official appointment line (0314-0725738) and also keep a local copy in `localStorage` as a backup. For a production workflow they can instead be connected to email, a CRM or a hospital management system.

## Customization
- Colors and layout: `assets/css/style.css`
- Navigation, footer, contact constants and form logic: `assets/js/main.js`
- Brand logo: `assets/images/dsi-logo.jfif`
- Illustration assets: `assets/images/`
