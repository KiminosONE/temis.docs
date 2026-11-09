import Hero from "../components/Hero.jsx";
import Layout from "../components/Layout.jsx";
import { siteUrl } from "../config.js";
import { useLanguage } from "../state/useLanguage.js";

const content = {
  en: {
    title: "Your information, explained clearly.",
    description: "Learn what Temis processes, how cloud synchronization works, and what choices you have over your information.",
    eyebrow: "Transparency first",
    updated: "Effective: November 9, 2026",
    note: "Temis does not sell personal information and does not currently use advertising or behavioral analytics.",
    cards: [
      ["privacy", "P", "Privacy policy", "What information Temis processes, why it is needed, where it is stored, and who may receive it.", "Read policy"],
      ["terms", "T", "Terms of use", "The rules and responsibilities that apply when you install, access, or use Temis.", "Read terms"],
      ["data-deletion", "D", "Data deletion", "Instructions to remove local information or request deletion of cloud account data.", "View instructions"],
    ],
  },
  es: {
    title: "Tu información, explicada claramente.",
    description: "Conoce qué procesa Temis, cómo funciona la sincronización en la nube y qué opciones tienes sobre tu información.",
    eyebrow: "Transparencia primero",
    updated: "Vigente desde: 9 de noviembre de 2026",
    note: "Temis no vende información personal y actualmente no utiliza publicidad ni analítica de comportamiento.",
    cards: [
      ["privacy", "P", "Política de privacidad", "Qué información procesa Temis, por qué se necesita, dónde se guarda y quién puede recibirla.", "Leer política"],
      ["terms", "T", "Condiciones de uso", "Las reglas y responsabilidades aplicables al instalar, acceder o utilizar Temis.", "Leer condiciones"],
      ["data-deletion", "D", "Eliminación de datos", "Instrucciones para borrar información local o solicitar la eliminación de datos de la cuenta.", "Ver instrucciones"],
    ],
  },
};

const titles = {
  en: "Temis | Legal information",
  es: "Temis | Información legal",
};

export default function HomePage() {
  const { language } = useLanguage();
  const copy = content[language];

  return (
    <Layout activePage="home" titles={titles}>
      <Hero {...copy} />
      <section className="cards" aria-label={language === "es" ? "Documentos legales" : "Legal documents"}>
        {copy.cards.map(([path, icon, title, description, link]) => (
          <a className="card" href={siteUrl(path)} key={path}>
            <span className="card-icon" aria-hidden="true">{icon}</span>
            <h2>{title}</h2>
            <p>{description}</p>
            <span className="card-link">{link} →</span>
          </a>
        ))}
      </section>
      <aside className="notice"><p>{copy.note}</p></aside>
    </Layout>
  );
}
