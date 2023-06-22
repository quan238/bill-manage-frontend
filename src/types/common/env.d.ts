export interface IEnvironment {
  APP_ENV: string
  API_URL: string
  FILE_URL: string
  JWT_KEY_NAME: string
  REALM_NAME: string
  PORTAL_NAME: string
  SOCKET_PORTAL_NAME: string
  LIMIT_TABLE_SIZE: number
  KEYCLOAK_URL: string
  KEYCLOAK_REALM: string
  KEYCLOAK_CLIENT_ID: string
  IMAGE_URL: string
  MEMBER_PORTAL_IMAGE_URL: string
  API_KEY?: string
  AUTH_DOMAIN?: string
  DATABASE_URL?: string
  PROJECT_ID?: string
  CLIENT_ID?: string
  STORAGE_BUCKET?: string
  WS_ENDPOINT: string
  APP_VERSION: string
}
