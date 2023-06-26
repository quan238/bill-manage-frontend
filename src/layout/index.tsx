import { lazy } from "react";

export const MainLayout = lazy(
  () => import("./Main/MainLayout" /* webpackChunkName: "Layout_MainLayout" */)
);
