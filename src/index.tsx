import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter, BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./context/products_context";
import { CartProvider } from "./context/cart_context";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ProductsProvider>
    <CartProvider>
      {/* <BrowserRouter> */}
      <HashRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </HashRouter>
      {/* </BrowserRouter> */}
    </CartProvider>
  </ProductsProvider>
);

reportWebVitals();
