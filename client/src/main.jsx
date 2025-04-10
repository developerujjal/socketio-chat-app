import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import AppRoute from "./routes/AppRoute";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <div onContextMenu={(e) => e.preventDefault()}> */}
    <div>
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </div>
  </StrictMode>
);
