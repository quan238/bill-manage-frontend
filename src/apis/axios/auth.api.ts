import { HttpService } from "apis/http-service";
import { REST_API_AUTH } from "apis/urls";
import { TApiReponse } from "types/api";
import { TLoginPayload, TLoginResponse } from "types/api/auth";

export const loginAPI = async (
  payload: TLoginPayload
): Promise<TApiReponse<TLoginResponse>> => {
  const url = REST_API_AUTH.LOGIN.uri;

  return HttpService.post<TLoginPayload, TApiReponse<TLoginResponse>>(
    url,
    payload
  );
};
