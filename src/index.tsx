import React from "react";
import ReactDOM from "react-dom/client"; // Import dari 'react-dom/client'
import App from "./App";
import { Provider } from "react-redux";
import store from "@app/store/store";
import "react-loading-skeleton/dist/skeleton.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement // Casting element
);

const isDarkMode = JSON.parse(localStorage.getItem("isDarkMode") || "false");
if (isDarkMode) {
  document.body.classList.add("dark-mode");
}

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
