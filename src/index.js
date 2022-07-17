import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

// Мои вопросы по уроку:
// 1. import bootstrap  -  делается только один раз в index.js?  Или bootstrap надо импортировать во всех компонентах, где только есть использование bootstrap стилей?
// 2. Как сделать npm start на github?
