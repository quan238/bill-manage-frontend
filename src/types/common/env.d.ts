export interface IEnvironment {
  publicRuntimeConfig: {
    theme: string;
    currency: string;
    toastPosition?:
      | "top-left"
      | "top-center"
      | "top-right"
      | "bottom-left"
      | "bottom-center"
      | "bottom-right";
  };
  auth: {
    registerEndpoint: string;
    storageTokenKeyName: string;
    onTokenExpiration: string;
  };
  api: {
    baseURL: string;
  };
}
