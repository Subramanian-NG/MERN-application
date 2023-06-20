import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import App1 from "./App1";
import App2 from "./App2";
import App3 from "./App3";
import App4 from "./App4";
import ExpenseApp from "./ExpenseApp";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ExpenseApp />
    </Router>
  </React.StrictMode>
);
