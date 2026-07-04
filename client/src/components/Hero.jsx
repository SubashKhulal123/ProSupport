import React from "react";
import { useLang } from "../LangContext.jsx";
import "./Hero.css";

export default function Hero() {
  const { lang } = useLang();
  const ja = lang === "ja";
  return (
    <section className="hero">
      <img className="hero__media" src="/Picture/01b00d46-7e7d-458c-8a4f-5a1768ffe472_nn.jpeg" alt="" aria-hidden="true" />
      <div className="hero__overlay" />
      <div className="container hero__content">
        <h1>
          {ja ? (
            <>グローバル人材を、スピーディーに。<br />必要な人を、必要な場所へ。</>
          ) : (
            <>Recruiting global talent quickly.<br />Putting the right people in the right places.</>
          )}
        </h1>
      </div>
      <div className="hero__scroll">
        <span className="hero__scroll-icon" aria-hidden="true">≫</span>
        Scroll
      </div>
    </section>
  );
}
