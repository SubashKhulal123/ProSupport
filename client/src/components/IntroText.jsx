import React from "react";
import { useLang } from "../LangContext.jsx";
import "./IntroText.css";

export default function IntroText() {
  const { lang } = useLang();
  const ja = lang === "ja";
  return (
    <section className="intro-text section">
      <div className="container">
      

        <p className="intro-text__body">
  {ja ? (
    <>
      <span style={{ whiteSpace: "nowrap" }}>
        採用コスト・面接・手続きなど、外国人採用の"面倒"をすべてサポート。
      </span>
      <br />
      <span style={{ whiteSpace: "nowrap" }}>
        企業様のニーズに合わせた人材をご紹介し、不安をしっかり解消します。
      </span>
    </>
  ) : (
    <>
      We provide comprehensive support for all the "hassles" of hiring foreign nationals, including recruitment costs, interviews, and procedures.
      <br />
      We introduce candidates that meet your company's needs and thoroughly address any concerns you may have.
    </>
  )}
</p>
        <img className="intro-text__media" src="/Picture/6248e05e-fa6c-4644-b051-8979a2ccfbc9_Y.jpg" alt={ja ? "スタッフ" : "Our staff"} />
      </div>
    </section>
  );
}
