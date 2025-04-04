import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import Auth0ProviderWithHistory from "./components/Auth0ProviderWithHistory.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
    <Auth0ProviderWithHistory>
      <App />
      </Auth0ProviderWithHistory>
    </StrictMode>
  </BrowserRouter>
);
