import React from "react";
import { Link } from "react-router-dom";
import "./PageShared.css";
import "./RoomCleaning.css";

const serviceContents = [
  "Room cleaning (bed-making, bathroom, restocking amenities, etc.)",
  "Cleaning of common areas",
  "Check-out handling",
  "Quality checks and management",
  "Room inspections",
  "Training and follow-up for cleaning staff",
  "Spot coverage available for busy seasons only",
];

const concerns = [
  "Cleaning staff don't stick around.",
  "Inconsistent quality is leading to complaints.",
  "We only want to add people during busy periods.",
  "Re-training new staff every time is a real burden.",
  "We'd like to bring on foreign staff, but training feels risky.",
];

const reasons = [
  {
    title: "A system that covers sudden absences",
    text: "We're available around the clock and can arrange cover quickly for unexpected staff shortages, so your hotel's operating rhythm never gets interrupted.",
  },
  {
    title: "Consistent quality through our training manual",
    text: "Our own training manual standardizes staff quality, so the finish is reliable no matter who's on shift that day.",
  },
  {
    title: "Clear, per-room pricing",
    text: "Pricing is calculated by room count, so costs stay easy to see and easy to manage.",
  },
  {
    title: "Careful work from a team led mostly by women",
    text: "Our team has a strong eye for detail, and hotels consistently tell us the finish is meticulous.",
  },
  {
    title: "Foreign staff on the team — resilient to labor shortages",
    text: "A multinational team means a more stable supply of staff, less exposed to local labor-shortage swings.",
  },
  {
    title: "Recruiting strength, because we're a staffing company at heart",
    text: "With 300+ registered staff to draw from, we can reliably secure the headcount you need — no operational gaps.",
  },
];

const strengths = [
  {
    title: "Fast to absorb and learn",
    text: "Procedures and standards are picked up quickly, so staff become productive within a short time.",
  },
  {
    title: "A serious attitude toward the work",
    text: "Well suited to process-driven work like bed-making and room cleaning, where consistency matters.",
  },
  {
    title: "High quality, consistent speed",
    text: "Steady, consistent movement means the finish quality stays even and the time per room doesn't drift — something hotels appreciate.",
  },
  {
    title: "High retention, less turnover stress",
    text: "Staff rarely quit shortly after training, which takes a lot of stress off the people managing the floor.",
  },
  {
    title: "Multilingual support keeps management simple",
    text: "Trilingual staff can accompany and respond on-site, removing communication worries.",
  },
];

export default function RoomCleaning() {
  return (
    <div>
      {/* Breadcrumb */}
      <div className="container page-breadcrumb">
        <Link to="/">Home</Link>
        <span className="page-breadcrumb-sep">›</span>
        <span>Room Cleaning</span>
      </div>

      <div className="container rc__body">
        <h1 className="rc__title">Room Cleaning Service</h1>
        <p className="rc__quote">
          "Room cleaning, done to a standard you can trust — supported by
          foreign staff who deliver results on site."
        </p>
        <p className="rc__intro">
          Our room cleaning service is built around diligent, fast-learning
          foreign staff. From basic technique and cleaning procedures to the
          small attentive touches Japanese hotels expect, we train staff
          thoroughly in both their native language and Japanese. Hotels keep
          coming back to us for our speed, our care, and our low staff
          turnover.
        </p>

        <h2 className="page-tab-title">Service contents</h2>
        <ul className="rc__list">
          {serviceContents.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>

        <h2 className="page-tab-title">Concerns we solve</h2>
        <ul className="rc__list rc__list--problems">
          {concerns.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>

        <h2 className="page-tab-title">Why we're chosen</h2>
        <div className="rc__grid">
          {reasons.map((r, i) => (
            <article className="rc__card" key={r.title}>
              <div className="rc__card-head">
                <span className="rc__card-num">{i + 1}</span>
                <h3>{r.title}</h3>
              </div>
              <p>{r.text}</p>
            </article>
          ))}
        </div>

        <h2 className="page-tab-title">Strengths of our foreign staff</h2>
        <div className="rc__grid">
          {strengths.map((s, i) => (
            <article className="rc__card" key={s.title}>
              <div className="rc__card-head">
                <span className="rc__card-num">{i + 1}</span>
                <h3>{s.title}</h3>
              </div>
              <p>{s.text}</p>
            </article>
          ))}
        </div>

        <div className="rc__cta">
          <p className="rc__cta-title">◆◇◆ Free quotes ◆◇◆</p>
          <p>
            From building a plan to talking through your staffing setup, feel
            free to reach out any time. We work with all kinds of lodging
            facilities, with a focus on hotels.
          </p>
          <Link className="btn btn-primary" to="/contact">
            Get a free quote
          </Link>
        </div>
      </div>
    </div>
  );
}
