import React from "react";
import { Link } from "react-router-dom";
import { useLang } from "../LangContext.jsx";
import { useTitle } from "../useTitle.js";
import "./PageShared.css";

const steps = {
  ja: [
    { title: "お問い合わせ・ヒアリング", text: "受入れ人数・職種・開始時期・必要な支援内容を確認します。", image: "/video-call.png" },
    { title: "支援内容・役割分担の説明", text: "登録支援機関が行う支援、企業側の対応事項、費用をわかりやすく説明します。", image: "/network-businessman.png" },
    { title: "支援計画案・見積りの提示", text: "企業の状況に合わせた支援計画案と見積りをご提案します。", image: "/network-businessman.png" },
    { title: "条件のすり合わせ", text: "支援範囲、連絡体制、緊急時の対応など、契約前の詳細条件を調整します。", image: "/network-businessman.png" },
    { title: "支援委託契約の締結", text: "受入れ企業と登録支援機関で正式に契約を締結します。", image: "/network-businessman.png" },
    { title: "対象外国人の選定・情報共有", text: "候補者のスキル・日本語レベル・人物像などを企業と共有し、選定を進めます。", image: "/network-businessman.png" },
    { title: "支援計画書（最終版）の作成", text: "入国前ガイダンス、住居確保、生活支援、出入国時の送迎など、法定支援内容を反映した最終計画書を作成します。", image: "/network-businessman.png" },
    { title: "在留資格申請手続き（登録支援機関が対応）", text: "必要書類の準備・作成・提出を登録支援機関が主体となって行います。企業は必要書類を提供するのみでOK。", image: "/network-businessman.png" },
    { title: "入国準備（受入れ環境の整備）", text: "住居の手配、生活備品の準備、受入れ体制の最終確認を行います。", image: "/network-businessman.png" },
    { title: "入国・支援開始", text: "空港送迎、生活オリエンテーション、役所手続き同行など、入国後すぐに支援を開始します。", image: "/network-businessman.png" },
  ],
  en: [
    { title: "Inquiry / Consultation", text: "We confirm the number of people to be accepted, the types of jobs, the start date, and the support that will be needed.", image: "/video-call.png" },
    { title: "Explanation of support services and division of roles", text: "We clearly explain the support provided by the registered support organization, the actions required from companies, and the associated costs.", image: "/network-businessman.png" },
    { title: "Presentation of support plan and estimate", text: "We propose a support plan and estimate tailored to the company's situation.", image: "/network-businessman.png" },
    { title: "Alignment of conditions", text: "We adjust the detailed conditions before the contract, including the scope of support, communication system, and response in emergencies.", image: "/network-businessman.png" },
    { title: "Conclusion of the support contract", text: "The accepting company and the registered support organization formally sign the contract.", image: "/network-businessman.png" },
    { title: "Selection and information sharing of target foreigners", text: "We share the candidate's skills, Japanese level, and personal profile with the company and proceed with the selection.", image: "/network-businessman.png" },
    { title: "Creation of support plan (final version)", text: "We create a final plan reflecting legally required support contents such as pre-entry guidance, housing, living support, and airport transfers.", image: "/network-businessman.png" },
    { title: "Residence status application procedures (handled by registered support organization)", text: "We take the lead in preparing, creating, and submitting the required documents. The company only needs to provide the necessary documents.", image: "/network-businessman.png" },
    { title: "Entry preparation (setting up the acceptance environment)", text: "We arrange housing, prepare daily necessities, and make final checks on the reception system.", image: "/network-businessman.png" },
    { title: "Entry into the country and commencement of support", text: "We begin providing support immediately after arrival, including airport transfers, orientation on daily life, and assistance with government procedures.", image: "/network-businessman.png" },
  ],
};

export default function RegistrationSupport() {
  const { lang } = useLang();
  const ja = lang === "ja";
  return (
    <div>
      <div className="container page-breadcrumb">
        <Link to="/">{ja ? "ホーム" : "Home"}</Link>
        <span className="page-breadcrumb-sep">›</span>
        <span>{ja ? "登録支援機関" : "Registration support organization"}</span>
      </div>
      <div className="container rso__intro">
        <h1 className="page-tab-title">{ja ? "登録支援機関" : "Registration support organization"}</h1>
        <p className="rso__intro-title">
          {ja ? "特定技能人材の受け入れを、安心につなげる支援体制" : "Support system to ensure a safe and secure acceptance of specified skilled workers"}
        </p>
        <div className="rso__intro-row">
          <img className="rso__intro-media" src="/flags-collage.png" alt={ja ? "対応国" : "Partner countries"} />
          <p>
            {ja
              ? "特定技能の基準を満たした日本語力・技術力の高い人材をご紹介します。受け入れ手続きから生活サポート、職場定着まで、登録支援機関として特定技能人材の受け入れを一貫してサポートします。"
              : "We introduce highly skilled individuals with strong Japanese language ability and technical training who meet the criteria for Specified Skilled Workers. As a registered support organization, we provide comprehensive support for accepting Specified Skilled Workers — from acceptance procedures through to living support and workplace integration."}
          </p>
        </div>
      </div>

      <div className="rso__steps">
        <div className="container">
          <h2 className="page-tab-title">{ja ? "登録支援サービスの内容" : "Details of the registration support service"}</h2>
          {steps[lang].map((s, i) => (
            <div className="rso__step" key={s.title}>
              <div className="rso__step-badge">
                <span style={{ fontSize: "0.55rem", letterSpacing: "0.05em" }}>STEP</span>
                <span>{i + 1}</span>
              </div>
              <div className="rso__step-body">
                <h3 className="rso__step-title">{s.title}</h3>
                <p className="rso__step-text">{s.text}</p>
                <img className="rso__step-media" src={s.image} alt={s.title} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rso__closing">
        <div className="rso__closing-chevron" aria-hidden="true">⌄⌄</div>
        <p className="rso__closing-headline">
          <span className="rso__closing-highlight">
            {ja ? "当社が上記すべての支援を代行いたします" : "Our company will handle all of the above support on your behalf."}
          </span>
        </p>
        <p className="rso__closing-line">
          {ja ? "「母国語」「英語」「日本語」に対応したトリリンガルスタッフが在中！" : "We have trilingual staff available who can speak your native language, English, and Japanese!"}
        </p>
        <p className="rso__closing-line">
          {ja ? "言葉の壁を気にせずお任せいただけます！" : "You can leave everything to us without worrying about language barriers!"}
        </p>
      </div>
    </div>
  );
}
