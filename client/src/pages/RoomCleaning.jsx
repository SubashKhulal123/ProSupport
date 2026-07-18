import React from "react";
import { Link } from "react-router-dom";
import { useLang } from "../LangContext.jsx";
import "./PageShared.css";
import "./RoomCleaning.css";

const content = {
  ja: {
    breadcrumb: "客室清掃業務",
    title: "客室清掃業務",
    quote: "「客室清掃を、確かな品質で。現場で評価される外国人スタッフが支えます」",
    intro: "当社の客室清掃は、勤勉で吸収力の高い外国人スタッフが中心。基本動作・清掃手順・日本のホテルならではの細やかな配慮まで、母国語と日本語の二方向から徹底して教育しています。「スピード」「丁寧さ」「離職率の低さ」が評価され、多くのホテル様から継続的にご依頼をいただいています。",
    serviceTitle: "サービス内容",
    serviceContents: [
      "客室清掃（ベッドメイク、バスルーム、アメニティ補充など）",
      "共用部清掃",
      "チェックアウト対応",
      "品質チェック・管理",
      "ルームインスペクション",
      "清掃スタッフの教育・フォロー",
      "繁忙期のみのスポット対応も可",
    ],
    concernsTitle: "こんなお悩みを解決します",
    concerns: [
      "清掃スタッフが定着しない",
      "品質のバラつきでクレームが出る",
      "繁忙期だけ人を増やしたい",
      "慣れていないスタッフに毎回教えるのが負担",
      "外国人スタッフを受け入れたいけど教育が心配",
    ],
    reasonsTitle: "私たちが選ばれる理由",
    reasons: [
      { title: "急な欠員もカバーできる体制", text: "24時間対応で、予期せぬ欠員にもすぐ人員を手配。ホテル運営のリズムを途切れさせない安心感があります。" },
      { title: "教育マニュアルで品質を一定に", text: "独自の教育マニュアルでスタッフの品質を標準化。「どの人が入っても仕上がりが安定している」と評価されています。" },
      { title: "部屋数単位の明瞭な料金体系", text: "必要な部屋数で計算できるので、コストが見えやすく、管理もしやすい仕組みです。" },
      { title: "丁寧な作業を支える女性スタッフ中心のチーム", text: "細部を拾う視点が強く、ホテル側からも「仕上がりが丁寧」と好評。" },
      { title: "外国籍スタッフも在籍。人材不足に強い", text: "多国籍チームだからこそ、安定した供給が可能。人手不足の波にも流されにくい体制を整えています。" },
      { title: "人材会社だからこその採用力", text: "300名以上の登録スタッフを活用し、必要な人員を確実に確保。運営の「穴」を作らせません。" },
    ],
    strengthsTitle: "外国人スタッフの強み",
    strengths: [
      { title: "吸収力が高く、習得が早い", text: "手順やルールの習得が早いため、短期間で戦力化できます。" },
      { title: "仕事に対する姿勢がまじめ", text: "ベッドメイクや客室清掃のような「決まったプロセスの仕事」に高い適性があります。" },
      { title: "高品質×スピード対応", text: "動きが一定で安定しているため、「仕上がりの品質が揃う」「作業時間がブレない」点がホテル側に好評。" },
      { title: "定着率が高いから、人手不足の解消に直結", text: "教えてもすぐ辞める……がほぼないため、現場のストレスが軽減。" },
      { title: "多言語フォローで管理がラク", text: "トリリンガルスタッフが同行・応対可能。意思疎通の不安を取り除けます。" },
    ],
    ctaTitle: "◆◇◆お見積りは無料◆◇◆",
    ctaBody: "プラン作成から稼働体制の相談まで、気軽に連絡できます。ホテルを中心に、宿泊施設であればどこでも対応可能です。",
    ctaBtn: "無料見積もりを依頼する",
  },
  en: {
    breadcrumb: "Room Cleaning",
    title: "Room Cleaning Service",
    quote: '"Room cleaning, done to a standard you can trust — supported by foreign staff who deliver results on site."',
    intro: "Our room cleaning service is built around diligent, fast-learning foreign staff. From basic technique and cleaning procedures to the small attentive touches Japanese hotels expect, we train staff thoroughly in both their native language and Japanese. Hotels keep coming back to us for our speed, our care, and our low staff turnover.",
    serviceTitle: "Service contents",
    serviceContents: [
      "Room cleaning (bed-making, bathroom, restocking amenities, etc.)",
      "Cleaning of common areas",
      "Check-out handling",
      "Quality checks and management",
      "Room inspections",
      "Training and follow-up for cleaning staff",
      "Spot coverage available for busy seasons only",
    ],
    concernsTitle: "Concerns we solve",
    concerns: [
      "Cleaning staff don't stick around.",
      "Inconsistent quality is leading to complaints.",
      "We only want to add people during busy periods.",
      "Re-training new staff every time is a real burden.",
      "We'd like to bring on foreign staff, but training feels risky.",
    ],
    reasonsTitle: "Why we're chosen",
    reasons: [
      { title: "A system that covers sudden absences", text: "We're available around the clock and can arrange cover quickly for unexpected staff shortages, so your hotel's operating rhythm never gets interrupted." },
      { title: "Consistent quality through our training manual", text: "Our own training manual standardizes staff quality, so the finish is reliable no matter who's on shift that day." },
      { title: "Clear, per-room pricing", text: "Pricing is calculated by room count, so costs stay easy to see and easy to manage." },
      { title: "Careful work from a team led mostly by women", text: "Our team has a strong eye for detail, and hotels consistently tell us the finish is meticulous." },
      { title: "Foreign staff on the team — resilient to labor shortages", text: "A multinational team means a more stable supply of staff, less exposed to local labor-shortage swings." },
      { title: "Recruiting strength, because we're a staffing company at heart", text: "With 300+ registered staff to draw from, we can reliably secure the headcount you need — no operational gaps." },
    ],
    strengthsTitle: "Strengths of our foreign staff",
    strengths: [
      { title: "Fast to absorb and learn", text: "Procedures and standards are picked up quickly, so staff become productive within a short time." },
      { title: "A serious attitude toward the work", text: "Well suited to process-driven work like bed-making and room cleaning, where consistency matters." },
      { title: "High quality, consistent speed", text: "Steady, consistent movement means the finish quality stays even and the time per room doesn't drift — something hotels appreciate." },
      { title: "High retention, less turnover stress", text: "Staff rarely quit shortly after training, which takes a lot of stress off the people managing the floor." },
      { title: "Multilingual support keeps management simple", text: "Trilingual staff can accompany and respond on-site, removing communication worries." },
    ],
    ctaTitle: "◆◇◆ Free quotes ◆◇◆",
    ctaBody: "From building a plan to talking through your staffing setup, feel free to reach out any time. We work with all kinds of lodging facilities, with a focus on hotels.",
    ctaBtn: "Get a free quote",
  },
};

export default function RoomCleaning() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <div>
      <div className="container page-breadcrumb">
        <Link to="/">{lang === "ja" ? "ホーム" : "Home"}</Link>
        <span className="page-breadcrumb-sep">›</span>
        <span>{t.breadcrumb}</span>
      </div>

      <div className="container rc__body">
        <h1 className="rc__title">{t.title}</h1>
        <p className="rc__quote">{t.quote}</p>
        <p className="rc__intro">{t.intro}</p>

        <h2 className="page-tab-title">{t.serviceTitle}</h2>
        <ul className="rc__list">
          {t.serviceContents.map((c) => <li key={c}>{c}</li>)}
        </ul>

        <h2 className="page-tab-title">{t.concernsTitle}</h2>
        <ul className="rc__list rc__list--problems">
          {t.concerns.map((c) => <li key={c}>{c}</li>)}
        </ul>

        <h2 className="page-tab-title">{t.reasonsTitle}</h2>
        <div className="rc__grid">
          {t.reasons.map((r, i) => (
            <article className="rc__card" key={r.title}>
              <div className="rc__card-head">
                <span className="rc__card-num">{i + 1}</span>
                <h3>{r.title}</h3>
              </div>
              <p>{r.text}</p>
            </article>
          ))}
        </div>

        <h2 className="page-tab-title">{t.strengthsTitle}</h2>
        <div className="rc__grid">
          {t.strengths.map((s, i) => (
            <article className="rc__card" key={s.title}>
              <div className="rc__card-head">
                <span className="rc__card-num">{i + 1}</span>
                <h3>{s.title}</h3>
              </div>
              <p>{s.text}</p>
            </article>
          ))}
        </div>

        <div className="rc__cta">
          <p className="rc__cta-title">{t.ctaTitle}</p>
          <p>{t.ctaBody}</p>
          <Link className="btn btn-primary" to="/contact">{t.ctaBtn}</Link>
        </div>
      </div>
    </div>
  );
}