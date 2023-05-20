import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import ProviderChat from "./Context/ProviderChat";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ProviderChat>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ProviderChat>
  </BrowserRouter>
);
