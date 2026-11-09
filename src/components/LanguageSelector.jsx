import { useLanguage } from "../state/useLanguage.js";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-picker" aria-label="Language / Idioma">
      {[
        ["en", "EN"],
        ["es", "ES"],
      ].map(([value, label]) => (
        <button
          key={value}
          type="button"
          aria-pressed={language === value}
          onClick={() => setLanguage(value)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
