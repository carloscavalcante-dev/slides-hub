import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "./components/ui/provider.tsx";
import "./index.css";

// biome-ignore lint: React configuration
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider forcedTheme="dark">
      <App />
    </Provider>
  </StrictMode>
);
