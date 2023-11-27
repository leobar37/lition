import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../modules/dashboard";
import * as fromClints from "../modules/clients";
import * as fromAuth from "../modules/auth";
import * as products from "../modules/products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/clients",
    element: <fromClints.Clients />,
  },
  {
    path: "/clients/new",
    element: <fromClints.NewClient />,
  },
  {
    path: "/clients/:id",
    element: <fromClints.UpdateClient />,
  },
  {
    path: "/login",
    element: <fromAuth.Login />,
  },
  {
    path: "/products",
    element: <products.Products />,
  },
  {
    path: "/products/new",
    element: <products.NewProduct />,
  },
]);
