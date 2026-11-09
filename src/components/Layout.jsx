import { useEffect } from "react";
import { REPOSITORY_URL, siteUrl } from "../config.js";
import { useLanguage } from "../state/useLanguage.js";
import LanguageSelector from "./LanguageSelector.jsx";

const text = {
  en: {
    skip: "Skip to content",
    privacy: "Privacy",
    terms: "Terms",
    deletion: "Data deletion",
    legalHome: "Legal home",
  },
  es: {
    skip: "Saltar al contenido",
    privacy: "Privacidad",
    terms: "Condiciones",
    deletion: "Eliminar datos",
    legalHome: "Inicio legal",
  },
};

export default function Layout({ activePage, titles, children }) {
  const { language } = useLanguage();
  const copy = text[language];

  useEffect(() => {
    document.title = titles[language];
  }, [language, titles]);

  const links = [
    ["privacy", copy.privacy],
    ["terms", copy.terms],
    ["data-deletion", copy.deletion],
  ];

  return (
    <>
      <a className="skip-link" href="#main">{copy.skip}</a>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href={siteUrl()} aria-label="Temis">
            <span className="brand-mark" aria-hidden="true">T</span>
            <span className="brand-name">Temis</span>
          </a>
          <div className="header-actions">
            <nav className="desktop-nav" aria-label="Legal">
              {links.map(([path, label]) => (
                <a key={path} href={siteUrl(path)} aria-current={activePage === path ? "page" : undefined}>
                  {label}
                </a>
              ))}
            </nav>
            <LanguageSelector />
          </div>
        </div>
      </header>

      <main className="page-shell" id="main">{children}</main>

      <footer className="site-footer">
        <div className="footer-inner">
          <p>© {new Date().getFullYear()} Temis · KiminosDev</p>
          <nav className="footer-links" aria-label="Footer">
            <a href={siteUrl()}>{copy.legalHome}</a>
            <a href={siteUrl("privacy")}>{copy.privacy}</a>
            <a href={siteUrl("terms")}>{copy.terms}</a>
            <a href={REPOSITORY_URL} rel="noreferrer">GitHub</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
