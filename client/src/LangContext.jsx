import React, { createContext, useContext, useState } from "react";

const LangContext = createContext({ lang: "ja", toggle: () => {} });

export function LangProvider({ children }) {
  const [lang, setLang] = useState("ja");
  const toggle = () => setLang((l) => (l === "ja" ? "en" : "ja"));
  return (
    <LangContext.Provider value={{ lang, toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
