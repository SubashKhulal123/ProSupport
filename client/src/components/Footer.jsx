
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLang } from "../LangContext.jsx";
import "./Footer.css";

const links = [
  {
    to: "/staffing",
    ja: "人材派遣",
    en: "Temporary staffing",
  },
  {
    to: "/registration-support",
    ja: "登録支援機関",
    en: "Registered support organization",
  },
  {
    to: "/company",
    ja: "会社概要",
    en: "Company Profile",
  },
  {
    to: "/contact",
    ja: "お問い合わせ",
    en: "Inquiry",
  },
  {
    to: "/privacy",
    ja: "プライバシーポリシー",
    en: "Privacy Policy",
  },
];

const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default function Footer() {
  const { lang } = useLang();
  const ja = lang === "ja";

  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <Link
          to="/"
          className="footer__logo-box"
          onClick={scrollTop}
        >
          <img
            src="/Picture/c7468e34-d96b-41bc-b293-32f86968d40e_favicon.png"
            alt="Logo"
            onError={(e) => {
              e.target.src = "/reallogo.jpg";
            }}
          />
        </Link>

        <nav className="footer__links">
          {links.map((l) => (
            <React.Fragment key={l.to}>
              <span
                className="footer__divider"
                aria-hidden="true"
              />

              <Link
                to={l.to}
                onClick={scrollTop}
              >
                {ja ? l.ja : l.en}
              </Link>
            </React.Fragment>
          ))}

          <span
            className="footer__divider"
            aria-hidden="true"
          />
        </nav>

        <p className="footer__copy">
          © PROSUPPORT.
        </p>
      </div>

            {showTop && (
        <button
  className={`footer__top-btn ${showTop ? "show" : ""}`}
  onClick={scrollTop}
  aria-label="Back to top"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 15l7-7 7 7"
    />
  </svg>

  <span>TOP</span>
</button>
      )}
    </footer>
  );
}
