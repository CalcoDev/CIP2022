import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { RecoilRoot } from "recoil";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/CIP2022">
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>
);
