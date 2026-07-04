import React from "react";
import { Link } from "react-router-dom";
import { useLang } from "../LangContext.jsx";
import { useTitle } from "../useTitle.js";
import "./PageShared.css";
import "./Company.css";

const facts = {
  ja: [
    { label: "事業所名",  value: "株式会社プロサポート" },
    { label: "本社所在地", value: "〒371-0854 群馬県前橋市大渡町１丁目１６－１オクシー前橋１階Ａ号室" },
    { label: "連絡先",   value: "TEL 027-289-0762\nFAX 027-289-0776" },
    { label: "設立",    value: "2020年4月1日" },
    { label: "代表者",   value: "代表取締役 大島 政巳" },
    { label: "事業内容",  value: "人材派遣業・業務請負業・コンサルティング業" },
    { label: "許可番号",  value: "労働派遣 派 10-300722\n登録支援機関 22 登-007347\n有料職業紹介事業 10-ユ-300463" },
  ],
  en: [
    { label: "Business name",        value: "ProSupport Co., Ltd." },
    { label: "Head office location",  value: "〒371-0854 1-16-1 Owatarimachi, Maebashi City, Gunma Prefecture, Oxy Maebashi 1st Floor, Room A" },
    { label: "Contact address",       value: "TEL 027-289-0762\nFAX 027-289-0776" },
    { label: "Establishment",         value: "April 1, 2020" },
    { label: "Representative",        value: "Representative Director: Masami Oshima" },
    { label: "Business details",      value: "Temporary staffing services, business outsourcing services, and consulting services." },
    { label: "Permit Number",         value: "Temporary Staffing Agency 10-300722\nRegistered Support Organization 22-007347\nPaid Employment Placement Business 10-Yu-300463" },
  ],
};

const REAL_MAP = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3211.4806128368928!2d139.04862467625577!3d36.397565590291855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601ef348063cd303%3A0x24c43d6839930990!2zSmFwYW4sIOOAkjM3MS0wODU0IEd1bm1hLCBNYWViYXNoaSwgxYx3YXRhcmltYWNoaSwgMS1jaMWNbWXiiJLvvJHvvJbiiJIxIOOCquOCr-OCt-ODvOWJjeapiw!5e0!3m2!1sen!2snp!4v1768815024948!5m2!1sen!2snp";

export default function Company() {
  const { lang } = useLang();
  const ja = lang === "ja";
  return (
    <div>
      <div className="container page-breadcrumb">
        <Link to="/">{ja ? "ホーム" : "Home"}</Link>
        <span className="page-breadcrumb-sep">›</span>
        <span>{ja ? "会社概要" : "Company Profile"}</span>
      </div>
      <div className="container company__body">
        <h1 className="page-tab-title">{ja ? "会社概要" : "Company Profile"}</h1>
        <table className="company__table">
          <tbody>
            {facts[lang].map((f) => (
              <tr key={f.label}>
                <th>{f.label}</th>
                <td>{f.value.split("\n").map((line, i) => (<React.Fragment key={i}>{i > 0 && <br />}{line}</React.Fragment>))}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="page-tab-title">{ja ? "アクセスマップ" : "Access Map"}</h2>
        <div className="company__map">
          <iframe title="Office location map" src={REAL_MAP} width="100%" height="100%" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>

        <h2 className="page-tab-title">{ja ? "お問い合わせ" : "Inquiry"}</h2>
        <div className="company__cta">
          <p>{ja ? "ご質問・ご相談がある方はお気軽にお問い合わせください。" : "Please feel free to contact us if you have any questions or concerns."}</p>
          <Link className="company__cta-btn" to="/contact">
            {ja ? "お問い合わせフォーム" : "Contact Form"}
          </Link>
        </div>
      </div>
    </div>
  );
}
