// Login
export type TLoginPayload = {
  email: string;
  password: string;
};

export type TLoginResponse = {
  tokenType: "Bearer" | "ApiKey";
  expiresIn: number;
  accessToken: string;
  refreshToken: string;
};

// Register
