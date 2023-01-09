import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { RoutesHandler } from "./routes/routes";
import store from "./store";
import { DashBoard } from "./dashBoardComponent/dashBoard";

const root = ReactDOM.createRoot(document.getElementById("root") as Element);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <DashBoard />
    </BrowserRouter>
  </Provider>
);
