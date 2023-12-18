import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./assets/scrollbar.css";
import { router } from "./router";
import { ConfirmDialog } from "./ui/components";
import { theme } from "./ui/theme";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
      <ConfirmDialog />
    </ChakraProvider>
  </React.StrictMode>
);
