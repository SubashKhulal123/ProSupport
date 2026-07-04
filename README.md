# ProConnect Staffing — MERN Starter

A MERN-stack staffing/recruitment-agency site, structured to mirror the
layout and feature set of prosupport1.com: hero, "why choose us" feature
grid, services grid (staffing / registration support / paid placement),
company page, and a contact form wired up to MongoDB.

All copy, images, and branding here are **original placeholders** —
swap in your own logo, photos, and text. Search for "Add your" comments
and placeholder blocks in the components to find what to replace.

## Stack
- **Frontend:** React (Vite) + React Router
- **Backend:** Node.js + Express
- **Database:** MongoDB via Mongoose

## Project structure
```
prosupport-clone/
  client/          React frontend
    src/
      components/  Navbar, Footer, Hero, WhyChooseUs, Services
      pages/       Home, Staffing, RegistrationSupport, Company, Contact, Privacy
  server/          Express + Mongoose backend
    config/db.js
    models/        Contact.js, Service.js
    routes/        contact.js, services.js
    server.js
```

## Running it locally

### 1. Backend
```bash
cd server
cp .env.example .env
# edit .env: point MONGO_URI at your local MongoDB (e.g. from MongoDB Compass)
# or a MongoDB Atlas connection string
npm install
npm run dev      # requires nodemon, or use: npm start
```
Server runs on http://localhost:5000 by default.

### 2. Frontend
```bash
cd client
npm install
npm run dev
```
Frontend runs on http://localhost:5173, and proxies `/api/*` calls to
the backend (configured in `vite.config.js`).

### 3. View your MongoDB data
Connect MongoDB Compass to the same `MONGO_URI` to inspect the
`contacts` and `services` collections as form submissions come in.

## What's wired up
- Contact form (`/contact`) posts to `POST /api/contact`, which saves
  to MongoDB via the `Contact` model.
- `GET /api/contact` lists submissions — useful as the basis for an
  admin dashboard later.
- A `Service` model + routes exist if you want service content to come
  from the database instead of being hardcoded in `Services.jsx`.

## What to customize next
- Replace the placeholder hero/section images (look for `.hero__placeholder`,
  `.detail-block__media`, etc.) with real photos.
- Replace `/public/favicon.svg` with your real logo.
- Update company facts in `pages/Company.jsx`.
- Write your real privacy policy in `pages/Privacy.jsx`.
- Add authentication if you want a protected admin view of contact submissions.
