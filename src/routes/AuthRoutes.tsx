import { lazy } from "react";

// project import
import Loadable from "components/Loader/Loadable";
import MinimalLayout from "layout/Minimal";

// render - login
const LoginPage = Loadable(lazy(() => import("pages/Login")));

// ==============================|| AUTH ROUTING ||============================== //

const AuthRoutes = {
  path: "/",
  element: <MinimalLayout />,
  children: [
    {
      path: "/login",
      element: <LoginPage />,
    },
  ],
};

export default AuthRoutes;
