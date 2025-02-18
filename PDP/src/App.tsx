import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ProductPage from "./pages/Product";

const App = () => (
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
