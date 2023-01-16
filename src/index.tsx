import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter, BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./context/products_context";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ProductsProvider>
    <BrowserRouter>
      {/* <HashRouter> */}
      <React.StrictMode>
        <App />
      </React.StrictMode>
      {/* </HashRouter> */}
    </BrowserRouter>
  </ProductsProvider>
);

reportWebVitals();
