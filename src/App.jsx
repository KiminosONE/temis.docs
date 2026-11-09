import DataDeletionPage from "./pages/DataDeletionPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import PrivacyPage from "./pages/PrivacyPage.jsx";
import TermsPage from "./pages/TermsPage.jsx";

const pages = {
  home: HomePage,
  privacy: PrivacyPage,
  terms: TermsPage,
  "data-deletion": DataDeletionPage,
};

export default function App({ page }) {
  const Page = pages[page] || HomePage;
  return <Page />;
}
