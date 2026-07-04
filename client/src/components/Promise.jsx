import React from "react";
import { useLang } from "../LangContext.jsx";
import "./Promise.css";

export default function Promise() {
  const { lang } = useLang();
  const ja = lang === "ja";
  return (
    <section className="promise">
      <div className="container promise__content">
        <h2 className="promise__headline">
          {ja
            ? "スピードも多様性も、全部ProSupportにおまかせ！ トリリンガルスタッフが現場をサポートします。"
            : "Leave speed and versatility to ProSupport! Our trilingual staff will support you on-site."}
        </h2>
        <p className="promise__body">
          {ja ? (
            <>
              トリリンガルスタッフが「母国語」「英語」「日本語」を通じて、作業内容を丁寧にレクチャーします。<br />
              また、人材管理・新人教育・指導・欠勤・退職までを一貫してサポート。派遣後も安心して職場の戦力となるよう、きめ細やかなアフターフォローを行います。
            </>
          ) : (
            <>
              Our trilingual staff provide thorough instruction on work procedures in the worker's native language, English, and Japanese.<br />
              We also offer comprehensive support, from personnel management and new-employee training to guidance, attendance, and offboarding — with careful aftercare so employees can confidently become valuable members of the team after they're placed.
            </>
          )}
        </p>
      </div>
    </section>
  );
}
