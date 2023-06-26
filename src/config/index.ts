export default {
  publicRuntimeConfig: {
    // Available on both server and client
    theme: "DEFAULT",
    currency: "USD",
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
