import { lazy } from "react";

// project import
import Loadable from "components/Loader/Loadable";
import MainLayout from "layout/Main/MainLayout";

// render
const DashboardPage = Loadable(lazy(() => import("pages/Dashboard")));
const BillingPage = Loadable(lazy(() => import("pages/Billings")));
const CustomerPage = Loadable(lazy(() => import("pages/Customers")));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
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
      element: <CustomerPage />,
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
