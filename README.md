# DSI Hospital Website Project

A complete responsive static front-end website concept for DSI Hospital, Gulistan-e-Johar, Karachi.

## Pages
- `index.html` — Home
- `about.html` — About
- `doctors.html` — Doctors directory template
- `departments.html` — Departments template
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

## Important before production
The public sources checked during development support this address and phone:
- Address: A-1, Block 4, Gulistan-e-Johar, Karachi, Pakistan
- Phone: 0314-0725738

The project intentionally does **not** invent a full doctor roster, hospital hours, accreditations, bed count, or complete service list. Confirm those details with DSI Hospital before publication.

The appointment and contact forms are front-end demos. They currently save submissions to browser `localStorage`; they must be connected to a secure backend/API/email/CRM before a public launch.

## Customization
- Colors and layout: `assets/css/style.css`
- Navigation, footer and form demo logic: `assets/js/main.js`
- Brand logo: `assets/images/dsi-logo.jfif`
- Illustration assets: `assets/images/`

The supplied DSI Hospital logo is wired into the shared header and footer, with the red, magenta, gray and white palette applied across the site.

