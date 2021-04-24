import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./views/App";
import reportWebVitals from "./reportWebVitals";
import ErrorBoundary from "./views/ErrorBoundary";
import ErrorPage from "./views/ErrorPage";

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary fallback={<ErrorPage />}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
