

import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLang } from "../LangContext.jsx";
import "./Navbar.css";

export default function Navbar() {
  const { lang, toggle } = useLang();
  const ja = lang === "ja";
  const [open, setOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const serviceRef = useRef(null);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (serviceRef.current && !serviceRef.current.contains(e.target)) {
        setServiceOpen(false);
      }
    };
    document.addEventListener("click", onClickOutside);
    return () => document.removeEventListener("click", onClickOutside);
  }, []);

  const serviceLinks = [
    { to: "/staffing", ja: "人材派遣", en: "Temporary Staffing" },
    { to: "/registration-support", ja: "登録支援機関", en: "Registered Support Organization" },
    { to: "/room-cleaning", ja: "ルームクリーニング", en: "Room Cleaning Services" },
  ];

  return (
    <header className="nav">
      <div className="nav__row">
        <Link to="/" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__logo-box">
            <img
              src="/Picture/c7468e34-d96b-41bc-b293-32f86968d40e_favicon.png"
              alt="Logo"
              onError={(e) => {
                e.target.src = "/logo.jpg";
              }}
            />
          </span>
        </Link>

        <nav className={`nav__links ${open ? "is-open" : ""}`}>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `nav__link ${isActive ? "is-active" : ""}`
            }
            onClick={() => setOpen(false)}
          >
            TOP
          </NavLink>

          <div className="nav__dropdown" ref={serviceRef}>
            <button
              type="button"
              className="nav__link nav__dropdown-toggle"
              aria-expanded={serviceOpen}
              onClick={() => setServiceOpen((v) => !v)}
            >
              {ja ? "サービス" : "Service"}
            </button>

            <div
              className={`nav__dropdown-menu ${
                serviceOpen ? "is-open" : ""
              }`}
            >
              {serviceLinks.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className="nav__dropdown-item"
                  onClick={() => {
                    setServiceOpen(false);
                    setOpen(false);
                  }}
                >
                  {ja ? l.ja : l.en}
                </NavLink>
              ))}
            </div>
          </div>

          <NavLink
            to="/company"
            className={({ isActive }) =>
              `nav__link ${isActive ? "is-active" : ""}`
            }
            onClick={() => setOpen(false)}
          >
            {ja ? "会社概要" : "Company Profile"}
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `nav__link ${isActive ? "is-active" : ""}`
            }
            onClick={() => setOpen(false)}
          >
            {ja ? "お問い合わせ" : "Inquiry"}
          </NavLink>

          <button
            className="nav__lang"
            onClick={toggle}
            title="Switch language"
          >
            {ja ? "EN" : "JP"}
          </button>
        </nav>

        <button
          className="nav__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
