import React from "react";
import { useLang } from "../LangContext.jsx";
import "./Concerns.css";

const concerns = {
  ja: [
    "人材は欲しいけれど、外国人スタッフときちんと意思疎通できるか不安",
    "特別な手続きが複雑そうで、なかなか踏み出せない",
    "外国人採用の実績がなく、何から始めればいいかわからない",
    "採用後のトラブルやフォローが不安",
  ],
  en: [
    "We need staff, but we're worried about whether we can communicate effectively with foreign staff.",
    "The special procedures seem complicated, so we're hesitant to take the first step.",
    "We have no experience hiring foreigners, and we don't know where to start.",
    "We're worried about potential problems and follow-up after hiring.",
  ],
};

export default function Concerns() {
  const { lang } = useLang();
  const ja = lang === "ja";
  return (
    <section className="concerns section">
      <div className="container">
        <h2 className="concerns__title">
          {ja ? "こんなお悩みありませんか？" : "Do you have any of these problems?"}
        </h2>
        <ul className="concerns__list">
          {concerns[lang].map((c) => (<li key={c}>{c}</li>))}
        </ul>
      </div>
    </section>
  );
}
