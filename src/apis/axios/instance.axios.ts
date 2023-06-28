import axios, { AxiosInstance } from "axios";
import CONFIG from "config";

export const InstanceAxios: AxiosInstance = axios.create({
  baseURL: CONFIG.api.baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

InstanceAxios.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers["x-timestamp"] = new Date().getTime();
    config.headers["x-custom-lang"] = "en";
    // config.headers["user-agent"] = navigator.userAgent;
  }

  const accessToken = localStorage.getItem(CONFIG.auth.storageTokenKeyName);

  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }

  return config;
});
