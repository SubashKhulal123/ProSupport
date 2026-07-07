import React from "react";
import { useLang } from "../LangContext.jsx";
import "./Services.css";

const coreServices = {
  ja: [
    { icon: "/Picture/ae646657-78c2-4ea0-9b55-97c8f5011c7b_images.png", title: "人材派遣", text: "必要なときに、必要な人材を適材適所で派遣します。また、遠方の現場には当社ワゴンによる送迎サービスも対応しています。", to: "/staffing" },
    { icon: "/Picture/13aa4926-a898-4975-9092-62a9d585005d_images (1).png", title: "登録支援機関", text: "ミャンマー・ネパール・インドネシアの提携校から、日本語能力や技術力の高い人材をご紹介します。", to: "/registration-support" },
    { icon: "/Picture/871e9641-ec85-47e9-b47c-6ec573bbb7bf_handshake-o-1.png", title: "有料職業紹介", text: "「働きたい」と「働いてほしい」をつなぐマッチングサービスです。必要人数を安定して確保でき、派遣コストや採用難にお悩みの企業様に最適です。", to: "/contact" },
    { icon: "/room.jpg", title: "ルームクリーニング", text: "当社のルームクリーニングサービスは、勤勉で習得の早い外国人スタッフを中心に構築されています。基本的な技術や清掃手順から、日本のホテルが求める細やかな気配りまで、母国語と日本語の両方で徹底的にトレーニングを行います。", to: "/room-cleaning" },
  ],
  en: [
    { icon: "/Picture/ae646657-78c2-4ea0-9b55-97c8f5011c7b_images.png", title: "Temporary staffing", text: "We dispatch the right personnel to the right place, when you need them. We also offer a transportation service using our company vans for distant job sites.", to: "/staffing" },
    { icon: "/Picture/13aa4926-a898-4975-9092-62a9d585005d_images (1).png", title: "Registered support organization", text: "We introduce highly skilled personnel with excellent Japanese language abilities and technical skills from our partner schools in Myanmar, Nepal, and Indonesia.", to: "/registration-support" },
    { icon: "/Picture/871e9641-ec85-47e9-b47c-6ec573bbb7bf_handshake-o-1.png", title: "Paid employment placement services", text: "A matching service that connects people who want to work with companies that need employees, ideal for companies struggling with staffing costs and recruitment difficulties.", to: "/contact" },
    { icon: "/room.jpg", title: "Room Cleaning Services", text: "Our room cleaning service is built around diligent, fast-learning foreign staff. From basic technique and cleaning procedures to the small attentive touches Japanese hotels expect, we train staff thoroughly in both their native language and Japanese.", to: "/room-cleaning" },
  ],
};

const globalServices = [
  { title: { ja: "国際貿易サポートコンサルティング業務",  en: "International trade support consulting services" }, image: "/Picture/604ba6f7-56fc-4ae8-aeee-6d661586a349_hh.png" },    
  { title: { ja: "外国法人向けビジネスプロセスコンサルティング業務", en: "Business process consulting services for foreign corporations" }, image: "/Picture/a3a51fc6-3afe-4234-9a3b-26a0660ab6c3_unnamed (1).jpg" },   
  { title: { ja: "現地法人設立コンサルティング業務",    en: "Consulting services for establishing local subsidiaries" }, image: "/Picture/1853a7f0-c449-456c-b4a1-ef657993a64a_unnamed (2).jpg" },
  { title: { ja: "B to B 国内外を繋ぐビジネスマッチング業務", en: "B2B business matching services connecting domestic and international markets." }, image: "/Picture/aa513d9e-80d9-4ff2-9929-58f95fe06b5e_1767339164.png" },


  
];

export default function Services() {
  const { lang } = useLang();
  const ja = lang === "ja";
  return (
    <section className="services section">
      <div className="container">
        <h2 className="services__title">{ja ? "サービス内容" : "Service details"}</h2>
        <div className="services__grid">
          {coreServices[lang].map((s) => (
            <div className="service__card" key={s.title}>
              <img className="service__icon" src={s.icon} alt="" aria-hidden="true" />
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <a className="service__btn" href={s.to}>{ja ? "詳しくはコチラ" : "Click here for details."}</a>
            </div>
          ))}
        </div>
      </div>

      <div className="container services__global">
        <p className="services__global-title">
          {ja ? "繋がる世界 Connecting the World Business" : "Connecting the World"}
        </p>
        <div className="services__global-grid">
          {globalServices.map((g) => (
            <div className="services__global-card" key={g.title.en}>
              <img className="services__global-media" src={g.image} alt={g.title[lang]} />
              <p className="services__global-card-title">{g.title[lang]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
