

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
          {ja ? (
            <>
              スピードも多様性も、全部ProSupportにおまかせ！<br />
              トリリンガルスタッフが現場をサポートします。
            </>
          ) : (
            <>
              Leave speed and versatility to ProSupport! Our trilingual staff will
              <br />
              support you on-site.
            </>
          )}
        </h2>

        <p className="promise__body">
          {ja ? (
            <>
              トリリンガルスタッフが「母国語」「英語」「日本語」を通じて、作業内容を丁寧にレクチャーします。<br />
              また、人材管理・新人教育・指導・欠勤・退職までを一貫してサポート。派遣後も安心して職場の戦力となるよう、きめ細やかなアフターフォローを行います。
            </>
          ) : (
            <>
              Our trilingual staff will provide thorough instruction on work procedures in their native language, 
              English, and Japanese.<br /><br />
              We also offer comprehensive support, from personnel management and new employee training to 
              guidance, absence management, and termination of employment. We provide meticulous after-sales 
              support to ensure that employees can confidently become valuable assets to their workplaces even 
              after being dispatched.
            </>
          )}
        </p>
      </div>
    </section>
  );
}
