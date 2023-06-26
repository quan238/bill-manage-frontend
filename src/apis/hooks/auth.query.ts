import { login } from "apis/axios";
import { TApiError } from "apis/errors";
import { useMutation } from "react-query";
import { TApiReponse, TLoginPayload, TLoginResponse } from "types/api";

export function useLogin() {
  return useMutation<TApiReponse<TLoginResponse>, TApiError, TLoginPayload>(
    login
  );
}
