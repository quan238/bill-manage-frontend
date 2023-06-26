import { IEnvironment } from "types/common";

const config: IEnvironment = {
  publicRuntimeConfig: {
    // Available on both server and client
    theme: "DEFAULT",
    currency: "USD",
    toastPosition: "top-right",
  },
  auth: {
    registerEndpoint: "/jwt/register",
    storageTokenKeyName: "accessToken",
    onTokenExpiration: "refreshToken", // logout | refreshToken
  },
  api: {
    baseURL: "http://localhost:3000",
  },
};

export const drawerWidth = 260;
export * from "./query.client";

export default config;
