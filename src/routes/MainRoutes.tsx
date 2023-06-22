import { lazy } from "react";

// project import
import Loadable from "components/Loader/Loadable";
import MainLayout from "layout/MainLayout";

// render
const DashboardPage = Loadable(lazy(() => import("pages/Dashboard")));
const BillingPage = Loadable(lazy(() => import("pages/Billings")));

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
