

import React from "react";
import { useLang } from "../LangContext.jsx";
import "./Hero.css";

export default function Hero() {
  const { lang } = useLang();
  const ja = lang === "ja";
  return (
    <section className="hero">
      <img className="hero__media" src="/network-businessman.png" alt="" aria-hidden="true" />
      <div className="hero__overlay" />
      <div className="container hero__content">
        <h1>
  {ja
    // ? <>グローバル人材を、スピーディーに。<br />必要な人を、必要な場所へ。</>
    ? <><span style={{ whiteSpace: "nowrap" }}> グローバル人材を、スピーディーに。</span><br /> 必要な人を、必要な場所へ。</>
    : <>Recruiting global talent quickly.<br />Putting the right people in the<br />right places.</>
  }
</h1>
      </div>
      <div className="hero__scroll">
  <svg
    className="hero__scroll-arrow"
    width="26"
    height="18"
    viewBox="0 0 26 18"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polyline points="6,2 13,8 20,2" />
    <polyline points="6,9 13,15 20,9" />
  </svg>

  <span className="hero__scroll-label">Scroll</span>
</div>
    </section>
  );
}