import axios, { AxiosInstance } from 'axios'
import store from 'store'
import { appConfig } from 'config'
import { keycloakClient } from 'utils'

export const InstanceAxios: AxiosInstance = axios.create({
  baseURL: appConfig.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

InstanceAxios.interceptors.request.use(config => {
  if (config.headers) {
    config.headers['realm-name'] = appConfig.REALM_NAME
    config.headers['portal-name'] = appConfig.PORTAL_NAME
    config.headers['country'] = store.store.getState().country

    if (keycloakClient?.token) {
      config.headers['Authorization'] = keycloakClient.token
    }
  }

  return config
})
