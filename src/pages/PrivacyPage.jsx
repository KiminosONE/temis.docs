import Hero from "../components/Hero.jsx";
import Layout from "../components/Layout.jsx";
import LegalDocument from "../components/LegalDocument.jsx";
import { ISSUES_URL, siteUrl } from "../config.js";
import { useLanguage } from "../state/useLanguage.js";

const titles = {
  en: "Temis | Privacy Policy",
  es: "Temis | Política de privacidad",
};

const page = {
  en: {
    title: "Privacy Policy",
    description: "How Temis processes information in the browser extension, its full-tab view, and optional account synchronization.",
    updated: "Effective and last updated: November 9, 2026",
    contents: "Contents",
  },
  es: {
    title: "Política de privacidad",
    description: "Cómo procesa Temis la información en la extensión, su vista en una pestaña y la sincronización opcional de cuenta.",
    updated: "Vigente y última actualización: 9 de noviembre de 2026",
    contents: "Contenido",
  },
};

function EnglishSections() {
  return [
    {
      id: "scope",
      title: "Scope and responsible developer",
      content: <><p>Temis is a browser extension developed and published by KiminosDev. This policy applies to information processed by Temis, not to the independent privacy practices of websites you visit or third-party services.</p><p>Account synchronization is optional. Temis can be used locally without an account, although cloud features will not be available.</p></>,
    },
    {
      id: "data",
      title: "Information Temis processes",
      content: <><h3>Account and profile information</h3><ul><li>Email address and Firebase user identifier.</li><li>Display name and profile image, when available.</li><li>Authentication and security data processed by Firebase, which may include password credentials, IP address, user agent, and sign-in metadata. Temis does not directly read or store your plaintext password.</li></ul><h3>Library and user-generated content</h3><ul><li>Collections, titles, descriptions, images, visibility, ownership, member roles, and timestamps.</li><li>Saved items, including title, URL, image, type, related keywords, TMDB identifier when available, and modification information.</li><li>Related pages, including page title, URL, seen status, creator/updater identifiers, and timestamps.</li></ul><h3>Current-page metadata</h3><p>To recognize related pages, Temis may examine the URL, document title, first page heading, and Open Graph image of HTTP and HTTPS pages. This happens in the browser. A matching record may be saved locally and, when you are signed in, synchronized to Firestore.</p><h3>Preferences and technical information</h3><ul><li>Language, display options, local schema version, revision state, and other settings.</li><li>An optional custom TMDB token if you provide one.</li><li>The language preference for this legal site, stored locally in your browser. This site does not use advertising or analytics cookies.</li></ul></>,
    },
    {
      id: "purposes",
      title: "How information is used",
      content: <ul><li>Provide, organize, search, import, and export your library.</li><li>Recognize pages related to saved items and maintain their seen status.</li><li>Create and authenticate an account and synchronize information across sessions or devices.</li><li>Retrieve movie and TV information requested through TMDB.</li><li>Protect the service, enforce permissions, diagnose failures, and prevent misuse.</li><li>Comply with legal obligations and respond to user requests.</li></ul>,
    },
    {
      id: "permissions",
      title: "Browser permissions",
      content: <><ul><li><strong>storage:</strong> saves your library, preferences, and revision state in Chrome storage.</li><li><strong>activeTab:</strong> accesses the active page when you use a feature that needs its information.</li><li><strong>scripting:</strong> supports communication and functionality on the active page.</li><li><strong>HTTP/HTTPS content scripts:</strong> enable automatic related-page detection and its status card.</li><li><strong>api.themoviedb.org:</strong> permits movie and TV searches and details.</li></ul><p>Temis uses these permissions only for its disclosed library-management purpose and related functionality.</p></>,
    },
    {
      id: "sharing",
      title: "Sharing and service providers",
      content: <><p>Temis does not sell personal information and does not use it for personalized advertising. Information may be processed by:</p><ul><li><strong>Google Firebase:</strong> Firebase Authentication manages accounts and Cloud Firestore stores synchronized profiles and library content.</li><li><strong>The Movie Database (TMDB):</strong> receives search text, media identifiers, and language parameters. Temis does not intentionally send your Firebase email or user ID to TMDB.</li><li><strong>Authorized collection participants:</strong> if collection sharing is available and you use it, members may access collection information according to their role.</li><li><strong>Authorities or successors:</strong> when required by law, needed to protect rights and security, or part of a legitimate service transfer with safeguards.</li></ul><p>Third-party services process information under their own terms and privacy policies.</p></>,
    },
    {
      id: "storage",
      title: "Storage, international processing, and retention",
      content: <><p>Without an account, your library and settings remain in Chrome extension storage on your device. When you sign in, synchronized account and library data is stored through Firebase. Firebase Authentication operates from the United States, while Cloud Firestore may process information in the selected Google Cloud location and related global infrastructure.</p><p>Local information remains until you reset Temis, clear extension storage, or uninstall the extension. Cloud information remains while your account is active or as needed to provide the service. It is deleted or anonymized following a verified request, subject to legal duties and provider backup-retention periods.</p></>,
    },
    {
      id: "choices",
      title: "Your choices and rights",
      content: <><p>Depending on your location, you may have rights to access, correct, export, object to processing of, or delete personal information. Temis provides local import, export, and reset tools. You may use Temis without an account to avoid cloud synchronization.</p><p>See the <a href={siteUrl("data-deletion")}>data deletion page</a>. Account ownership may need to be verified before a cloud-data request is completed.</p></>,
    },
    {
      id: "security",
      title: "Security and Limited Use",
      content: <><p>Temis uses HTTPS-based services and Firestore security rules designed to restrict cloud access by authenticated identity, ownership, and collection role. No system can guarantee absolute security, so protect your credentials and keep the extension updated.</p><p><strong>The use of information received from Google APIs will adhere to the Chrome Web Store User Data Policy, including the Limited Use requirements.</strong></p></>,
    },
    {
      id: "children",
      title: "Children's privacy",
      content: <p>Temis is not directed to children under 13 or the minimum digital-consent age in their jurisdiction, and the developer does not knowingly collect their personal information. A parent or guardian who believes a child supplied information may request its deletion.</p>,
    },
    {
      id: "changes",
      title: "Changes and contact",
      content: <><p>This policy may be updated when features, providers, or legal duties change. Material changes will update the date above and, when appropriate, be announced in Temis.</p><p>For privacy questions or to begin a data request, use the official repository. Never include passwords, authentication tokens, or other secrets in a public issue.</p><div className="button-row"><a className="button" href={ISSUES_URL} rel="noreferrer">Contact the developer</a><a className="button secondary" href={siteUrl("data-deletion")}>Deletion instructions</a></div></>,
    },
  ];
}

function SpanishSections() {
  return [
    {
      id: "scope",
      title: "Alcance y desarrollador responsable",
      content: <><p>Temis es una extensión para el navegador desarrollada y publicada por KiminosDev. Esta política se aplica a la información procesada por Temis, no a las prácticas independientes de los sitios que visites o de servicios externos.</p><p>La sincronización de cuenta es opcional. Temis puede utilizarse localmente sin una cuenta, aunque las funciones en la nube no estarán disponibles.</p></>,
    },
    {
      id: "data",
      title: "Información que procesa Temis",
      content: <><h3>Información de cuenta y perfil</h3><ul><li>Dirección de correo electrónico e identificador de usuario de Firebase.</li><li>Nombre visible e imagen de perfil, cuando estén disponibles.</li><li>Datos de autenticación y seguridad procesados por Firebase, que pueden incluir credenciales de contraseña, dirección IP, agente de usuario y metadatos de acceso. Temis no lee ni almacena directamente tu contraseña en texto sin cifrar.</li></ul><h3>Biblioteca y contenido del usuario</h3><ul><li>Colecciones, títulos, descripciones, imágenes, visibilidad, propiedad, roles de miembros y marcas de tiempo.</li><li>Elementos guardados con título, URL, imagen, tipo, palabras relacionadas, identificador de TMDB cuando exista e información de modificaciones.</li><li>Páginas relacionadas con título, URL, estado visto, identificadores de creación o actualización y marcas de tiempo.</li></ul><h3>Metadatos de la página actual</h3><p>Para reconocer páginas relacionadas, Temis puede examinar la URL, el título del documento, el primer encabezado y la imagen Open Graph de páginas HTTP y HTTPS. Esto ocurre en el navegador. Una coincidencia puede guardarse localmente y, con la sesión iniciada, sincronizarse con Firestore.</p><h3>Preferencias e información técnica</h3><ul><li>Idioma, opciones de visualización, versión del esquema local, estado de revisión y otros ajustes.</li><li>Un token personalizado de TMDB si decides proporcionarlo.</li><li>El idioma de este sitio legal, guardado localmente en tu navegador. Este sitio no utiliza cookies publicitarias ni analíticas.</li></ul></>,
    },
    {
      id: "purposes",
      title: "Cómo se utiliza la información",
      content: <ul><li>Proporcionar, organizar, buscar, importar y exportar tu biblioteca.</li><li>Reconocer páginas relacionadas con elementos guardados y mantener su estado visto.</li><li>Crear y autenticar una cuenta y sincronizar información entre sesiones o dispositivos.</li><li>Obtener información de películas y series solicitada mediante TMDB.</li><li>Proteger el servicio, aplicar permisos, diagnosticar fallos y prevenir usos indebidos.</li><li>Cumplir obligaciones legales y responder solicitudes.</li></ul>,
    },
    {
      id: "permissions",
      title: "Permisos del navegador",
      content: <><ul><li><strong>storage:</strong> guarda tu biblioteca, preferencias y revisión en Chrome.</li><li><strong>activeTab:</strong> accede a la página activa cuando utilizas una función que necesita su información.</li><li><strong>scripting:</strong> permite la comunicación y funciones sobre la página activa.</li><li><strong>Content scripts HTTP/HTTPS:</strong> permiten detectar automáticamente páginas relacionadas y mostrar su tarjeta.</li><li><strong>api.themoviedb.org:</strong> permite buscar y obtener detalles de películas y series.</li></ul><p>Temis utiliza estos permisos únicamente para administrar la biblioteca y las funciones relacionadas declaradas.</p></>,
    },
    {
      id: "sharing",
      title: "Proveedores y divulgación",
      content: <><p>Temis no vende información personal ni la utiliza para publicidad personalizada. La información puede ser procesada por:</p><ul><li><strong>Google Firebase:</strong> Firebase Authentication administra cuentas y Cloud Firestore guarda perfiles y bibliotecas sincronizadas.</li><li><strong>The Movie Database (TMDB):</strong> recibe textos de búsqueda, identificadores y parámetros de idioma. Temis no envía intencionalmente tu correo o identificador de Firebase a TMDB.</li><li><strong>Participantes autorizados:</strong> si está disponible la función de compartir colecciones y decides utilizarla, los miembros podrán acceder según su rol.</li><li><strong>Autoridades o sucesores:</strong> cuando lo exija la ley, sea necesario para proteger derechos y seguridad o exista una transferencia legítima del servicio con garantías.</li></ul><p>Los servicios externos procesan información según sus propias condiciones y políticas.</p></>,
    },
    {
      id: "storage",
      title: "Almacenamiento, procesamiento internacional y conservación",
      content: <><p>Sin una cuenta, la biblioteca y los ajustes permanecen en el almacenamiento de la extensión de Chrome en tu dispositivo. Al iniciar sesión, Firebase guarda la cuenta y biblioteca sincronizadas. Firebase Authentication opera desde Estados Unidos, mientras que Cloud Firestore puede procesar información en la ubicación seleccionada de Google Cloud e infraestructura global relacionada.</p><p>La información local permanece hasta que restablezcas Temis, borres el almacenamiento o desinstales la extensión. La información en la nube permanece mientras la cuenta esté activa o sea necesaria para prestar el servicio. Se elimina o anonimiza tras una solicitud verificada, sujeta a obligaciones legales y copias temporales del proveedor.</p></>,
    },
    {
      id: "choices",
      title: "Tus opciones y derechos",
      content: <><p>Según tu ubicación, puedes tener derechos para acceder, corregir, exportar, oponerte al tratamiento o eliminar información personal. Temis ofrece herramientas locales para importar, exportar y restablecer. Puedes utilizar Temis sin una cuenta para evitar la sincronización en la nube.</p><p>Consulta la <a href={siteUrl("data-deletion")}>página de eliminación de datos</a>. Podremos verificar la propiedad de la cuenta antes de completar una solicitud sobre datos en la nube.</p></>,
    },
    {
      id: "security",
      title: "Seguridad y uso limitado",
      content: <><p>Temis utiliza servicios HTTPS y reglas de Firestore diseñadas para limitar el acceso según identidad autenticada, propiedad y rol. Ningún sistema garantiza seguridad absoluta; protege tus credenciales y mantén actualizada la extensión.</p><p><strong>El uso de información recibida de las API de Google cumplirá la Política de Datos de Usuario de Chrome Web Store, incluidos los requisitos de Uso Limitado.</strong></p></>,
    },
    {
      id: "children",
      title: "Privacidad de menores",
      content: <p>Temis no está dirigido a menores de 13 años ni a quienes no alcancen la edad mínima de consentimiento digital de su jurisdicción, y el desarrollador no recopila intencionalmente su información. Un padre, madre o tutor puede solicitar la eliminación de datos proporcionados por un menor.</p>,
    },
    {
      id: "changes",
      title: "Cambios y contacto",
      content: <><p>Esta política puede actualizarse cuando cambien las funciones, proveedores u obligaciones legales. Los cambios importantes actualizarán la fecha anterior y, cuando corresponda, se anunciarán en Temis.</p><p>Para preguntas de privacidad o para iniciar una solicitud, utiliza el repositorio oficial. Nunca incluyas contraseñas, tokens ni otros secretos en una incidencia pública.</p><div className="button-row"><a className="button" href={ISSUES_URL} rel="noreferrer">Contactar al desarrollador</a><a className="button secondary" href={siteUrl("data-deletion")}>Instrucciones de eliminación</a></div></>,
    },
  ];
}

export default function PrivacyPage() {
  const { language } = useLanguage();
  const copy = page[language];
  const sections = language === "es" ? SpanishSections() : EnglishSections();

  return (
    <Layout activePage="privacy" titles={titles}>
      <Hero title={copy.title} description={copy.description} updated={copy.updated} eyebrow="Legal" />
      <LegalDocument contentsLabel={copy.contents} sections={sections} />
    </Layout>
  );
}
