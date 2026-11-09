import Hero from "../components/Hero.jsx";
import Layout from "../components/Layout.jsx";
import LegalDocument from "../components/LegalDocument.jsx";
import { ISSUES_URL, siteUrl } from "../config.js";
import { useLanguage } from "../state/useLanguage.js";

const titles = {
  en: "Temis | Terms of Use",
  es: "Temis | Condiciones de uso",
};

const page = {
  en: {
    title: "Terms of Use",
    description: "These terms govern your installation of, access to, and use of Temis.",
    updated: "Effective and last updated: November 9, 2026",
    contents: "Contents",
  },
  es: {
    title: "Condiciones de uso",
    description: "Estas condiciones regulan la instalación, el acceso y el uso de Temis.",
    updated: "Vigentes y última actualización: 9 de noviembre de 2026",
    contents: "Contenido",
  },
};

function EnglishSections() {
  return [
    {
      id: "acceptance",
      title: "Acceptance and eligibility",
      content: <><p>By installing, accessing, or using Temis, you agree to these Terms of Use and the <a href={siteUrl("privacy")}>Privacy Policy</a>. If you do not agree, do not use Temis.</p><p>You must be legally capable of accepting these terms. If you are under the age of legal majority, a parent or guardian must authorize your use where required by law.</p></>,
    },
    {
      id: "service",
      title: "What Temis provides",
      content: <p>Temis helps users organize collections of movies, TV shows, web pages, and related pages; search third-party media information; track seen status; import or export local information; and optionally synchronize a library through an account. Features may change as the project develops.</p>,
    },
    {
      id: "accounts",
      title: "Accounts and security",
      content: <><p>An account is optional but required for cloud synchronization. You must provide accurate information, protect your credentials, and promptly report suspected unauthorized access. You are responsible for activity through your account unless applicable law provides otherwise.</p><p>The developer may suspend access when reasonably necessary to protect users, investigate misuse, comply with law, or maintain the service.</p></>,
    },
    {
      id: "content",
      title: "Your content and permissions",
      content: <><p>You retain ownership of content and information you add to Temis. You grant the developer limited, non-exclusive permission to host, copy, process, and transmit that content only as needed to operate, secure, synchronize, and improve the requested functionality.</p><p>You are responsible for having the right to save, use, or share URLs, images, descriptions, and other content. Removing content may not immediately remove temporary or backup copies held by providers.</p></>,
    },
    {
      id: "conduct",
      title: "Acceptable use",
      content: <p>You may not use Temis to violate law or third-party rights; distribute malware; evade access controls; interfere with the extension or infrastructure; access another person's account or private collection without authorization; overload services; or upload unlawful, abusive, deceptive, or infringing content. You may not reverse engineer the service except where applicable law expressly permits it.</p>,
    },
    {
      id: "third-parties",
      title: "Third-party services and content",
      content: <><p>Temis may interact with Chrome, Firebase, websites you visit, and TMDB. Their availability, accuracy, security, content, and terms are controlled by their providers. Temis does not own or endorse third-party websites opened from saved URLs.</p><p>This product uses the TMDB API but is not endorsed or certified by TMDB. Movie and TV information may be incomplete, delayed, or inaccurate.</p></>,
    },
    {
      id: "ownership",
      title: "Temis intellectual property",
      content: <p>Temis, its name, interface, original code, graphics, and documentation are owned by the developer or their licensors and protected by applicable laws. Subject to these terms, you receive a limited, revocable, non-transferable license to use the extension for its intended purpose. Open-source components remain governed by their own licenses.</p>,
    },
    {
      id: "availability",
      title: "Updates, availability, and termination",
      content: <><p>The service may be updated, interrupted, limited, or discontinued. Cloud functions depend on third-party infrastructure and internet availability. The developer does not promise that every feature or stored item will always remain available.</p><p>You may stop using Temis at any time. You can reset local information, uninstall the extension, or request deletion of cloud data. Sections that should survive termination—including ownership, disclaimers, and liability limitations—will continue to apply.</p></>,
    },
    {
      id: "disclaimers",
      title: "Disclaimers and limitation of liability",
      content: <><p>To the maximum extent permitted by law, Temis is provided “as is” and “as available,” without warranties of uninterrupted operation, fitness for a particular purpose, accuracy, non-infringement, or permanent preservation of data.</p><p>To the maximum extent permitted by law, the developer will not be liable for indirect, incidental, special, consequential, or punitive damages, loss of data, loss of opportunity, or damages resulting from third-party services. Nothing excludes rights or liability that cannot legally be excluded.</p></>,
    },
    {
      id: "changes",
      title: "Changes, applicable law, and contact",
      content: <><p>These terms may be updated to reflect changes in Temis or legal requirements. Material revisions will update the date above and may be communicated in the product. Continued use after an effective update means you accept the revised terms where permitted by law.</p><p>These terms are governed by applicable law, without depriving consumers of mandatory protections in their place of residence. If a provision is unenforceable, the remaining provisions continue in effect.</p><p>Questions may be submitted through the official repository. Never include a password, token, or other secret in a public issue.</p><div className="button-row"><a className="button" href={ISSUES_URL} rel="noreferrer">Contact the developer</a><a className="button secondary" href={siteUrl("privacy")}>Privacy policy</a></div></>,
    },
  ];
}

function SpanishSections() {
  return [
    {
      id: "acceptance",
      title: "Aceptación y requisitos",
      content: <><p>Al instalar, acceder o utilizar Temis, aceptas estas Condiciones de uso y la <a href={siteUrl("privacy")}>Política de privacidad</a>. Si no estás de acuerdo, no utilices Temis.</p><p>Debes tener capacidad legal para aceptar estas condiciones. Si eres menor de edad, un padre, madre o tutor deberá autorizar tu uso cuando la ley lo exija.</p></>,
    },
    {
      id: "service",
      title: "Qué proporciona Temis",
      content: <p>Temis permite organizar colecciones de películas, series, páginas web y páginas relacionadas; buscar información multimedia de terceros; registrar el estado visto; importar o exportar información local y, opcionalmente, sincronizar una biblioteca mediante una cuenta. Las funciones pueden cambiar conforme evolucione el proyecto.</p>,
    },
    {
      id: "accounts",
      title: "Cuentas y seguridad",
      content: <><p>La cuenta es opcional, pero necesaria para sincronizar en la nube. Debes proporcionar información correcta, proteger tus credenciales e informar rápidamente de accesos no autorizados. Eres responsable de la actividad de tu cuenta, salvo que la legislación aplicable disponga lo contrario.</p><p>El desarrollador podrá suspender el acceso cuando sea razonablemente necesario para proteger a los usuarios, investigar usos indebidos, cumplir la ley o mantener el servicio.</p></>,
    },
    {
      id: "content",
      title: "Tu contenido y permisos",
      content: <><p>Conservas la propiedad del contenido y la información que agregues a Temis. Concedes al desarrollador un permiso limitado y no exclusivo para alojar, copiar, procesar y transmitir ese contenido únicamente cuando sea necesario para operar, proteger, sincronizar y mejorar las funciones solicitadas.</p><p>Eres responsable de tener derecho a guardar, utilizar o compartir URLs, imágenes, descripciones y demás contenido. Eliminar contenido puede no borrar inmediatamente las copias temporales o de seguridad de los proveedores.</p></>,
    },
    {
      id: "conduct",
      title: "Uso aceptable",
      content: <p>No puedes utilizar Temis para infringir la ley o derechos de terceros; distribuir software malicioso; eludir controles de acceso; interferir con la extensión o su infraestructura; acceder sin autorización a cuentas o colecciones privadas; sobrecargar servicios; ni subir contenido ilegal, abusivo, engañoso o infractor. No puedes realizar ingeniería inversa salvo cuando la legislación aplicable lo permita expresamente.</p>,
    },
    {
      id: "third-parties",
      title: "Servicios y contenido de terceros",
      content: <><p>Temis puede interactuar con Chrome, Firebase, sitios que visites y TMDB. Su disponibilidad, exactitud, seguridad, contenido y condiciones dependen de sus proveedores. Temis no posee ni respalda los sitios externos abiertos desde URLs guardadas.</p><p>Este producto utiliza la API de TMDB, pero no está respaldado ni certificado por TMDB. La información de películas y series puede estar incompleta, desactualizada o ser inexacta.</p></>,
    },
    {
      id: "ownership",
      title: "Propiedad intelectual de Temis",
      content: <p>Temis, su nombre, interfaz, código original, gráficos y documentación pertenecen al desarrollador o sus licenciantes y están protegidos por las leyes aplicables. Sujeto a estas condiciones, recibes una licencia limitada, revocable e intransferible para utilizar la extensión con su finalidad prevista. Los componentes de código abierto continúan sujetos a sus propias licencias.</p>,
    },
    {
      id: "availability",
      title: "Actualizaciones, disponibilidad y finalización",
      content: <><p>El servicio puede actualizarse, interrumpirse, limitarse o dejar de ofrecerse. Las funciones en la nube dependen de infraestructura externa y de Internet. El desarrollador no promete que todas las funciones o datos estén siempre disponibles.</p><p>Puedes dejar de utilizar Temis en cualquier momento. Puedes restablecer la información local, desinstalar la extensión o solicitar la eliminación de datos en la nube. Las secciones que deban continuar —incluidas propiedad, exclusiones y limitaciones— seguirán vigentes.</p></>,
    },
    {
      id: "disclaimers",
      title: "Exclusiones y limitación de responsabilidad",
      content: <><p>En la máxima medida permitida por la ley, Temis se proporciona “tal cual” y “según disponibilidad”, sin garantías de funcionamiento ininterrumpido, idoneidad para un propósito, exactitud, ausencia de infracción ni conservación permanente de datos.</p><p>En la máxima medida permitida por la ley, el desarrollador no será responsable de daños indirectos, incidentales, especiales, consecuentes o punitivos, pérdida de datos u oportunidades ni daños derivados de servicios externos. Nada excluye derechos o responsabilidades que legalmente no puedan excluirse.</p></>,
    },
    {
      id: "changes",
      title: "Cambios, legislación aplicable y contacto",
      content: <><p>Estas condiciones pueden actualizarse para reflejar cambios en Temis o requisitos legales. Las revisiones importantes actualizarán la fecha anterior y podrán comunicarse dentro del producto. Continuar utilizando Temis después de una actualización implica aceptarla cuando la ley lo permita.</p><p>Estas condiciones se rigen por la legislación aplicable, sin privar a los consumidores de las protecciones obligatorias de su residencia. Si una disposición no puede aplicarse, las restantes continuarán vigentes.</p><p>Las consultas pueden enviarse mediante el repositorio oficial. Nunca incluyas contraseñas, tokens u otros secretos en una incidencia pública.</p><div className="button-row"><a className="button" href={ISSUES_URL} rel="noreferrer">Contactar al desarrollador</a><a className="button secondary" href={siteUrl("privacy")}>Política de privacidad</a></div></>,
    },
  ];
}

export default function TermsPage() {
  const { language } = useLanguage();
  const copy = page[language];
  const sections = language === "es" ? SpanishSections() : EnglishSections();

  return (
    <Layout activePage="terms" titles={titles}>
      <Hero title={copy.title} description={copy.description} updated={copy.updated} />
      <LegalDocument contentsLabel={copy.contents} sections={sections} />
    </Layout>
  );
}
