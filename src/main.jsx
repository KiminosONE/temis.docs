import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import LanguageProvider from "./state/LanguageProvider.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <App page={document.body.dataset.page || "home"} />
    </LanguageProvider>
  </StrictMode>,
);
