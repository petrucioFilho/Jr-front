import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.css";
import MainRoutes from "./routes.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <MainRoutes />
  </BrowserRouter>
);
