import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AFewMoreDetails } from "./screens/AFewMoreDetails";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <AFewMoreDetails />
  </StrictMode>,
);
