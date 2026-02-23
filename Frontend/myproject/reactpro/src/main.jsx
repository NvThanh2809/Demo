import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
// <React.StrictMode>: ch? ?? nghiêm ng?t c?a React,
// dùng ?? phát hi?n bug ti?m ?n, warning và các side-effect không an toàn
// (ch? áp d?ng trong môi tr??ng development)

// Cách t?o m?t web app m?i
// npm create vite
// ?i?n tên project
// Ch?n React và JavaScript
// cd <tên-app>

// npm install
// npm rundev
