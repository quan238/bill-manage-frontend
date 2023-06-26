import axios, { AxiosInstance } from "axios";
import config from "config";

export const InstanceAxios: AxiosInstance = axios.create({
  baseURL: config.api.baseURL,
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

  return config;
});
