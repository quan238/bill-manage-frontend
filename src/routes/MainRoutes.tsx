import { lazy } from "react";

// project import
import Loadable from "components/Loader/Loadable";
import MainLayout from "layout/Main/MainLayout";
import { ProtectedRoute } from "./ProtectedRoutes";

// render
const DashboardPage = Loadable(lazy(() => import("pages/Dashboard")));
const BillingPage = Loadable(lazy(() => import("pages/Billings")));
const CustomerListPage = Loadable(
  lazy(() => import("pages/Customer/CustomerList"))
);
const CreateCustomerPage = Loadable(
  lazy(() => import("pages/Customer/CreateCustomer"))
);

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: (
    <ProtectedRoute>
      <MainLayout />
    </ProtectedRoute>
  ),
  children: [
    {
      path: "/",
      element: <DashboardPage />,
    },
    {
      path: "/dashboard",
      element: <DashboardPage />,
    },
    {
      path: "/customers",
      element: <CustomerListPage />,
    },
    {
      path: "/create-customer",
      element: <CreateCustomerPage />,
    },
    {
      path: "/billings",
      element: <BillingPage />,
    },
    // {
    //     path: 'color',
    //     element: <Color />
    // },
  ],
};

export default MainRoutes;
