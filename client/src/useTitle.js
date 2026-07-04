import { useEffect } from "react";
import { useLang } from "./LangContext.jsx";

const titles = {
  home:    { ja: "外国籍の人材紹介のことなら | ProSupport", en: "For recruitment of foreign nationals | ProSupport" },
  staffing: { ja: "人材派遣 | ProSupport",     en: "Staffing | ProSupport" },
  rso:     { ja: "登録支援機関 | ProSupport",   en: "Registered Support Organization | ProSupport" },
  company: { ja: "会社概要 | ProSupport",       en: "Company Profile | ProSupport" },
  contact: { ja: "お問い合わせ | ProSupport",   en: "Inquiry | ProSupport" },
  privacy: { ja: "プライバシーポリシー | ProSupport", en: "Privacy Policy | ProSupport" },
  cleaning:{ ja: "客室清掃業務 | ProSupport",   en: "Room Cleaning Service | ProSupport" },
};

export function useTitle(page) {
  const { lang } = useLang();
  useEffect(() => {
    document.title = titles[page]?.[lang] || titles.home[lang];
  }, [page, lang]);
}
