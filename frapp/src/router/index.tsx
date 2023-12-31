import { createHashRouter } from "react-router-dom";
import { Dashboard } from "../modules/dashboard";
import * as fromClints from "../modules/clients";
import * as fromAuth from "../modules/auth";
import * as products from "../modules/products";
import * as fromSales from "../modules/sales";
import * as fromSuppliers from "../modules/suppliers";
import * as fromPurchases from "../modules/purchases";
import * as fromBusiness from "../modules/business";
import * as fromUsers from "../modules/users";
import { TrpcIntegration } from "~/lib";

export const router = createHashRouter(
  [
    {
      path: "/",
      element: (
        <TrpcIntegration>
          <Dashboard />
        </TrpcIntegration>
      ),
    },
    {
      path: "/clients",
      element: (
        <TrpcIntegration>
          <fromClints.Clients />
        </TrpcIntegration>
      ),
    },
    {
      path: "/clients/new",
      element: (
        <TrpcIntegration>
          <fromClints.NewClient />
        </TrpcIntegration>
      ),
    },
    {
      path: "/clients/see/:id",
      element: (
        <TrpcIntegration>
          <fromClints.SeeClient />
        </TrpcIntegration>
      ),
    },
    {
      path: "/clients/:id",
      element: (
        <TrpcIntegration>
          <fromClints.UpdateClient />
        </TrpcIntegration>
      ),
    },
    {
      path: "/auth/login",
      element: (
        <TrpcIntegration>
          <fromAuth.Login />
        </TrpcIntegration>
      ),
    },
    {
      path: "/products",
      element: (
        <TrpcIntegration>
          <products.Products />
        </TrpcIntegration>
      ),
    },
    {
      path: "/products/new",
      element: (
        <TrpcIntegration>
          <products.NewProduct />
        </TrpcIntegration>
      ),
    },
    {
      path: "/products/:id",
      element: (
        <TrpcIntegration>
          <products.UpdateProduct />
        </TrpcIntegration>
      ),
    },
    {
      path: "/products/:productId/create-alias",
      element: (
        <TrpcIntegration>
          <products.UnitAliasCreate />
        </TrpcIntegration>
      ),
    },
    {
      path: "/products/:productId/alias/:id",
      element: (
        <TrpcIntegration>
          <products.UnitAliasUpdate />
        </TrpcIntegration>
      ),
    },
    {
      path: "/sales",
      element: (
        <TrpcIntegration>
          <fromSales.Sales />
        </TrpcIntegration>
      ),
    },
    {
      path: "/sales/new",
      element: (
        <TrpcIntegration>
          <fromSales.CreateSale />
        </TrpcIntegration>
      ),
    },
    {
      path: "/sales/:id",
      element: (
        <TrpcIntegration>
          <fromSales.UpdateSale />
        </TrpcIntegration>
      ),
    },
    {
      path: "/suppliers",
      element: (
        <TrpcIntegration>
          <fromSuppliers.Suppliers />
        </TrpcIntegration>
      ),
    },
    {
      path: "/suppliers/new",
      element: (
        <TrpcIntegration>
          <fromSuppliers.CreateSupplier />
        </TrpcIntegration>
      ),
    },
    {
      path: "/suppliers/see/:id",
      element: (
        <TrpcIntegration>
          <fromSuppliers.SeeSupplier />
        </TrpcIntegration>
      ),
    },
    {
      path: "/suppliers/:id",
      element: (
        <TrpcIntegration>
          <fromSuppliers.UpdateSupplier />
        </TrpcIntegration>
      ),
    },
    {
      path: "/purchases",
      element: (
        <TrpcIntegration>
          <fromPurchases.Purchases />
        </TrpcIntegration>
      ),
    },
    {
      path: "/purchases/new",
      element: (
        <TrpcIntegration>
          <fromPurchases.CreatePurchase />
        </TrpcIntegration>
      ),
    },
    {
      path: "/purchases/:id",
      element: (
        <TrpcIntegration>
          <fromPurchases.UpdatePurchase />
        </TrpcIntegration>
      ),
    },
    {
      path: "/business",
      element: (
        <TrpcIntegration>
          <fromBusiness.ListBusiness />
        </TrpcIntegration>
      ),
    },
    {
      path: "/business/new",
      element: (
        <TrpcIntegration>
          <fromBusiness.CreateBusiness />
        </TrpcIntegration>
      ),
    },
    {
      path: "/business/update/:id",
      element: (
        <TrpcIntegration>
          <fromBusiness.UpdateBusiness />
        </TrpcIntegration>
      ),
    },
    {
      path: "/users",
      element: (
        <TrpcIntegration>
          <fromUsers.ListUsers />
        </TrpcIntegration>
      ),
    },
    {
      path: "/users/new",
      element: (
        <TrpcIntegration>
          <fromUsers.CreateUser />
        </TrpcIntegration>
      ),
    },
    {
      path: "/users/:id",
      element: (
        <TrpcIntegration>
          <fromUsers.UpdateUser />
        </TrpcIntegration>
      ),
    },
  ],
  {
    basename: "",
  }
);
