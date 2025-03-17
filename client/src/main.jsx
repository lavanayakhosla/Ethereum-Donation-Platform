import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ Ensure it's imported
import App from "./App";
import { TransactionsProvider } from "./context/TransactionContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>  {/* ✅ Only one Router at the top level */}
      <TransactionsProvider>
        <App />
      </TransactionsProvider>
    </BrowserRouter>
  </React.StrictMode>
);