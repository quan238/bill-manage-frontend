import { TMutationOptions } from "types/common/general.d";
import { loginAPI } from "apis/axios";
import { TApiError } from "apis/errors";
import { useMutation } from "react-query";
import { TApiReponse, TLoginPayload, TLoginResponse } from "types/api";

export function useLogin(options?: TMutationOptions["queryConfig"]) {
  return useMutation<TApiReponse<TLoginResponse>, TApiError, TLoginPayload>(
    loginAPI,
    options
  );
}
