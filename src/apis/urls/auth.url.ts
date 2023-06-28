import { TListAPI } from "types/api";

const REST_API_AUTH: TListAPI = {
  LOGIN: {
    uri: "v1/public/user/login",
    method: "POST",
  },
  REGISTER: {
    uri: "/auth/register",
    method: "POST",
  },
};

export default REST_API_AUTH;
