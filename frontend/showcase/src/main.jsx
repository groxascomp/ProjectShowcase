import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AppDataProvider } from "./context/AppDataContext";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <AppDataProvider>
        <App />
      </AppDataProvider>
    </StrictMode>
  </BrowserRouter>,
);
