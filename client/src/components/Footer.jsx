import React from "react";
import { Link } from "react-router-dom";
import { useLang } from "../LangContext.jsx";
import "./Footer.css";

const links = [
  { to: "/staffing",              ja: "人材派遣",          en: "Temporary staffing" },
  { to: "/registration-support",  ja: "登録支援機関",       en: "Registered support organization" },
  { to: "/company",               ja: "会社概要",          en: "Company Profile" },
  { to: "/contact",               ja: "お問い合わせ",       en: "Inquiry" },
  { to: "/privacy",               ja: "プライバシーポリシー", en: "Privacy Policy" },
];

export default function Footer() {
  const { lang } = useLang();
  const ja = lang === "ja";
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <Link to="/" className="footer__logo-box">
          <img src="/Picture/c7468e34-d96b-41bc-b293-32f86968d40e_favicon.png" alt="Logo" onError={(e) => { e.target.src = "/reallogo.jpg"; }} />
        </Link>

        <nav className="footer__links">
          {links.map((l) => (
            <React.Fragment key={l.to}>
              <span className="footer__divider" aria-hidden="true" />
              <Link to={l.to}>{ja ? l.ja : l.en}</Link>
            </React.Fragment>
          ))}
          <span className="footer__divider" aria-hidden="true" />
        </nav>

        <p className="footer__copy">© PROSUPPORT.</p>
      </div>
    </footer>
  );
}
