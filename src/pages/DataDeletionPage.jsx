import Hero from "../components/Hero.jsx";
import Layout from "../components/Layout.jsx";
import LegalDocument from "../components/LegalDocument.jsx";
import { ISSUES_URL } from "../config.js";
import { useLanguage } from "../state/useLanguage.js";

const titles = {
  en: "Temis | Data Deletion",
  es: "Temis | Eliminación de datos",
};

const page = {
  en: {
    eyebrow: "Your data",
    title: "Data deletion instructions",
    description: "Remove information stored on your device or request deletion of your Temis cloud account data.",
    updated: "Last updated: November 9, 2026",
    contents: "Contents",
  },
  es: {
    eyebrow: "Tus datos",
    title: "Instrucciones para eliminar datos",
    description: "Borra la información del dispositivo o solicita la eliminación de los datos de tu cuenta de Temis en la nube.",
    updated: "Última actualización: 9 de noviembre de 2026",
    contents: "Contenido",
  },
};

const requestUrl = `${ISSUES_URL}?title=Data%20deletion%20request&body=I%20would%20like%20instructions%20for%20deleting%20my%20Temis%20account%20data.%20I%20have%20not%20included%20my%20email%2C%20password%2C%20or%20tokens%20in%20this%20public%20issue.`;

function EnglishSections() {
  return [
    {
      id: "local-data",
      title: "Remove local extension data",
      content: <><p>To remove the library and settings stored on the current browser:</p><ol><li>Open Temis.</li><li>Open <strong>Settings</strong>.</li><li>Use <strong>Reset Temis</strong> and confirm.</li></ol><p>You may also uninstall Temis and remove its extension data through Chrome. Export anything you want to keep first because resetting is intended to be irreversible.</p></>,
    },
    {
      id: "cloud-data",
      title: "Request deletion of cloud account data",
      content: <><p>Until self-service account deletion is available inside Temis, begin a verified request through the official repository:</p><ol><li>Open a new request with the button below.</li><li>State that you want to delete your Temis account and synchronized Firestore data.</li><li><strong>Do not publish your email, password, authentication token, or other sensitive information in the public issue.</strong></li><li>The developer will provide a private method to verify account ownership.</li></ol><p>After verification, the request covers the Temis profile, personal library entries, owned collections, their elements and related pages, subject to legally required retention and temporary provider backups.</p><div className="button-row"><a className="button" href={requestUrl} rel="noreferrer">Start deletion request</a></div></>,
    },
    {
      id: "sign-out",
      title: "Signing out is not account deletion",
      content: <p>Signing out clears the active Temis session and may reset local extension state, but it does not by itself delete synchronized Firebase data or the Firebase Authentication account. Use the cloud deletion procedure if you want those records removed.</p>,
    },
    {
      id: "retention",
      title: "Processing time and backups",
      content: <><p>Verified requests will be handled within the period required by applicable law. Some information may remain temporarily in encrypted provider backups or be retained when legally required, for security, fraud prevention, or dispute resolution. It will not be used for unrelated purposes during that period.</p><aside className="notice inline"><p><strong>Important:</strong> removing a Google account or clearing ordinary browsing history does not necessarily remove Temis extension data.</p></aside></>,
    },
  ];
}

function SpanishSections() {
  return [
    {
      id: "local-data",
      title: "Eliminar los datos locales de la extensión",
      content: <><p>Para borrar la biblioteca y los ajustes guardados en el navegador actual:</p><ol><li>Abre Temis.</li><li>Entra en <strong>Configuración</strong>.</li><li>Utiliza <strong>Restablecer Temis</strong> y confirma.</li></ol><p>También puedes desinstalar Temis y borrar sus datos desde Chrome. Exporta antes lo que quieras conservar porque el restablecimiento está diseñado para ser irreversible.</p></>,
    },
    {
      id: "cloud-data",
      title: "Solicitar la eliminación de los datos de la cuenta",
      content: <><p>Hasta que Temis permita eliminar la cuenta directamente, inicia una solicitud verificada mediante el repositorio oficial:</p><ol><li>Abre una solicitud nueva con el botón siguiente.</li><li>Indica que quieres eliminar tu cuenta de Temis y los datos sincronizados en Firestore.</li><li><strong>No publiques tu correo, contraseña, token de autenticación ni otra información sensible en la incidencia pública.</strong></li><li>El desarrollador proporcionará un método privado para verificar que la cuenta te pertenece.</li></ol><p>Después de verificarla, la solicitud abarca el perfil, las entradas de la biblioteca, las colecciones propias, sus elementos y páginas relacionadas, excepto la conservación legal y copias temporales del proveedor.</p><div className="button-row"><a className="button" href={requestUrl} rel="noreferrer">Iniciar solicitud</a></div></>,
    },
    {
      id: "sign-out",
      title: "Cerrar sesión no elimina la cuenta",
      content: <p>Cerrar sesión elimina la sesión activa y puede restablecer el estado local, pero no borra por sí solo los datos sincronizados de Firebase ni la cuenta de Firebase Authentication. Utiliza el procedimiento anterior para eliminar esos registros.</p>,
    },
    {
      id: "retention",
      title: "Plazo y copias de seguridad",
      content: <><p>Las solicitudes verificadas se atenderán dentro del plazo exigido por la ley. Parte de la información puede permanecer temporalmente en copias cifradas o conservarse cuando lo exija la ley, por seguridad, prevención del fraude o resolución de disputas. No se utilizará para fines no relacionados durante ese periodo.</p><aside className="notice inline"><p><strong>Importante:</strong> eliminar una cuenta de Google o borrar el historial normal no elimina necesariamente los datos de la extensión Temis.</p></aside></>,
    },
  ];
}

export default function DataDeletionPage() {
  const { language } = useLanguage();
  const copy = page[language];
  const sections = language === "es" ? SpanishSections() : EnglishSections();

  return (
    <Layout activePage="data-deletion" titles={titles}>
      <Hero {...copy} />
      <LegalDocument contentsLabel={copy.contents} sections={sections} />
    </Layout>
  );
}
