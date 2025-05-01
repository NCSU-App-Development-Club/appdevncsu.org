import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./background.css";
import App from "./App.tsx";

createRoot(document.querySelector("body")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
