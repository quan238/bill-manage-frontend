import { IEnvironment } from "types/common";

const env: ImportMetaEnv = import.meta.env;

const config: IEnvironment = {
  publicRuntimeConfig: {
    // Available on both server and client
    theme: "DEFAULT",
    currency: "USD",
    toastPosition: "top-right",
  },
  auth: {
    registerEndpoint: "/jwt/register",
    storageTokenKeyName: env.VITE_STORAGE_TOKEN_KEY_NAME || "accessToken",
    onTokenExpiration: env.VITE_ON_TOKEN_EXPIRATION || "refreshToken", // logout | refreshToken
  },
  api: {
    baseURL: env.VITE_API_BASE_URL || "http://localhost:8888",
  },
};

export const drawerWidth = 260;
export * from "./query.client";

export default config;
