import React from "react";
import { Link } from "react-router-dom";
import { useTitle } from "../useTitle.js";
import { useLang } from "../LangContext.jsx";
import "./PageShared.css";
import "../components/WhyChooseUs.css";

const benefits = {
  ja: [
    "必要な時間に必要な人数だけ確保でき、求人広告や面接のコストを抑えられます。",
    "勤怠管理や給与計算に加え、各種保険料や教育費の負担がないため、管理コストと手間を大幅に削減できます。",
  ],
  en: [
    "Bring on exactly the headcount you need, only when you need it — no recruiting-ad spend, no interview overhead.",
    "Attendance tracking, payroll, insurance contributions, and training costs all sit with us, cutting your management workload significantly.",
  ],
};

const points = {
  ja: [
    { title: "選び抜かれた人材を派遣", text: "外国人スタッフは勤勉で吸収力が高く、多くの現場で高い評価を受けています。当社では文化の違いを踏まえ、日本のルールやマナーを母国語で徹底指導し、厳選した人材を派遣しています。" },
    { title: "送迎サポート", text: "天候不良時でも出退勤ができるよう、当社ワゴンで送迎を実施。送迎を通じてスタッフの体調変化にも早期に気づき、人材管理の負担を軽減します。" },
    { title: "最適な職場へのマッチング", text: "文化の異なる外国人スタッフに対し、母国語と日本語で丁寧に面接を行い、語学力や適性をしっかり確認します。多様化するニーズに合わせ、最適な職場へ適材適所の人材をご提案・ご紹介します。" },
    { title: "外国人採用の不安を解消", text: "現場には必要に応じてトリリンガルリーダーを配置し、人材管理・教育・指導から欠勤・退職まで一貫してサポート。派遣後も安心して戦力化できるよう、きめ細かなアフターフォローを行います。" },
    { title: "現場担当者様とのコミュニケーションを大切に", text: "現場担当者様と密に打ち合わせを行い、業務に関する疑問や不安を丁寧に解消します。3,000名を超える登録スタッフの中から、必要な日程・期間に合う人材を最短3日でご紹介します。" },
  ],
  en: [
    { title: "We dispatch carefully selected personnel.", text: "Our foreign staff are diligent, highly receptive, and have received high praise in many workplaces. Taking cultural differences into consideration, we provide thorough training on Japanese rules and manners in their native languages, and only dispatch carefully selected personnel." },
    { title: "Transportation support", text: "To ensure employees can commute to and from work even in bad weather, we provide transportation using our company vans. This transportation service also allows us to quickly notice any changes in staff health, reducing the burden of personnel management." },
    { title: "Matching you with the optimal workplace", text: "We conduct thorough interviews with foreign staff from diverse cultural backgrounds, using both their native language and Japanese, to carefully assess their language skills and suitability. We propose and introduce the right person for the right job in a workplace that meets increasingly diverse needs." },
    { title: "Addressing concerns about hiring foreign nationals", text: "We assign trilingual leaders to the worksite as needed, providing comprehensive support from personnel management, training, and guidance to handling absences and resignations. We also provide meticulous after-sales support to ensure that employees can become productive members of the team with confidence after their deployment." },
    { title: "We value communication with on-site personnel.", text: "We will work closely with on-site personnel to carefully address any questions or concerns regarding the work. From our pool of over 3,000 registered staff, we will introduce personnel who meet your required schedule and duration in as little as three days." },
  ],
};

export default function Staffing() {
  const { lang } = useLang();
  const ja = lang === "ja";
  return (
    <div>
      <div className="container page-breadcrumb">
        <Link to="/">{ja ? "ホーム" : "Home"}</Link>
        <span className="page-breadcrumb-sep">›</span>
        <span>{ja ? "人材派遣" : "Staffing"}</span>
      </div>
      <div className="container staffing__body">
        <h1 className="staffing__title">{ja ? "人材派遣" : "Staffing"}</h1>
        <p className="staffing__tagline">
          {ja ? "採用コスト・面接・手続きは、すべて弊社にお任せください！" : "Leave the recruiting cost, interviews, and paperwork to us."}
        </p>
        <img className="staffing__media" src="/Picture/6084ffcb-e89b-48e6-ae7a-a4914b8b34c8_29564210_m.jpg" alt={ja ? "人材派遣" : "Temporary staffing"} />
        <h2 className="staffing__benefits-title">{ja ? "弊社に任せるメリット" : "Benefits of leaving it to us"}</h2>
        <ul className="staffing__benefits">
          {benefits[lang].map((b) => (<li key={b}>{b}</li>))}
        </ul>
        <p className="staffing__points-title">{ja ? "まだある！　PROSUPPORTのポイント" : "More! Our ProSupport points"}</p>
      </div>
      <div className="container">
        <div className="why__grid" style={{ marginTop: 0, marginBottom: 64 }}>
          {points[lang].map((p) => (
            <article className="why__card" key={p.title}>
              <div className="why__card-head">
                <span className="why__card-bar" aria-hidden="true" />
                <h3>{p.title}</h3>
              </div>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
