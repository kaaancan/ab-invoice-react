import React from "react";
import "./App.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "./aws-exports";
import { Amplify } from "aws-amplify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { InvoicePage } from "./pages/InvoicePage";
import { HomePage } from "./pages/HomePage";

Amplify.configure(awsExports);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/invoice/create" element={<InvoicePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default withAuthenticator(App);
