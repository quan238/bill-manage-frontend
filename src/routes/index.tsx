import { useRoutes } from "react-router-dom";

// project import
import MainRoutes from "./MainRoutes";
import AuthRoutes from "./AuthRoutes";
import Error404 from "pages/404";

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([
    MainRoutes,
    AuthRoutes,
    { path: "*", element: <Error404 /> },
  ]);
}
