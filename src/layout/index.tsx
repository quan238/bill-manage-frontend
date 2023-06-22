import { lazy } from 'react'

export const MainLayout = lazy(
  () => import('./MainLayout' /* webpackChunkName: "Layout_MainLayout" */)
)
