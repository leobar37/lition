import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { theme } from "./ui/theme";
import { TrpcIntegration } from "./lib";
import "./assets/scrollbar.css";
import { ConfirmDialog, SimpleModal } from "./ui/components";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <TrpcIntegration>
        <RouterProvider router={router} />
        <ConfirmDialog />
        <SimpleModal />
      </TrpcIntegration>
    </ChakraProvider>
  </React.StrictMode>
);
