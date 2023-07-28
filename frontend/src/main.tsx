import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./Index.css";
import { ContextProvider } from "./Context/Basic_Functionality";
import { ApiContextProvider } from "./Context/Api_Contex.jsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ContextProvider>
      <ApiContextProvider>
        <App />
      </ApiContextProvider>
    </ContextProvider>
  </React.StrictMode>
);
