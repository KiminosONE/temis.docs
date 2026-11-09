import { useEffect, useMemo, useState } from "react";
import { LanguageContext } from "./languageContext.js";

const STORAGE_KEY = "temis-legal-language";

function initialLanguage() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (["en", "es"].includes(saved)) return saved;
  return navigator.language?.toLowerCase().startsWith("es") ? "es" : "en";
}

export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(initialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
