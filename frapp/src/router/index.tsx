import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../modules/dashboard";
import * as fromClints from "../modules/clients";
import * as fromAuth from "../modules/auth";
import * as products from "../modules/products";
import * as fromSales from "../modules/sales";
import * as fromSuppliers from "../modules/suppliers";
import * as fromPurchases from "../modules/purchases";
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
  {
    path: "/products/:id",
    element: <products.UpdateProduct />,
  },
  {
    path: "/products/:productId/create-alias",
    element: <products.UnitAliasCreate />,
  },
  {
    path: "/products/:productId/alias/:id",
    element: <products.UnitAliasUpdate />,
  },
  {
    path: "/sales",
    element: <fromSales.Sales />,
  },
  {
    path: "/sales/new",
    element: <fromSales.CreateSale />,
  },
  {
    path: "/sales/:id",
    element: <fromSales.UpdateSale />,
  },
  {
    path: "/suppliers",
    element: <fromSuppliers.Suppliers />,
  },
  {
    path: "/suppliers/new",
    element: <fromSuppliers.CreateSupplier />,
  },
  {
    path: "/suppliers/:id",
    element: <fromSuppliers.UpdateSupplier />,
  },
  {
    path: "/purchases",
    element: <fromPurchases.Purchases />,
  },
  {
    path: "/purchases/new",
    element: <fromPurchases.CreatePurchase />,
  },
  {
    path: "/purchases/:id",
    element: <fromPurchases.UpdatePurchase />,
  },
]);
