import { AxiosError } from "axios";
import { toast } from "react-hot-toast";
import { TApiErrorReponse } from "types/api";
import { TMessageError } from "types/common";

export class ApiError extends Error {
  message: string;
  status: number;
  errors: TMessageError[];

  constructor(message: string, status = 0) {
    super("");
    this.message = message;
    this.name = "ApiError";
    this.status = status;
  }
}

export class ApiErrorForm extends Error {
  errors: TMessageError[];
  status: number;

  constructor(message: TMessageError[], status = 0) {
    super("");
    this.errors = message;
    this.name = "ApiErrorForm";
    this.status = status;
  }
}

export type TApiError = ApiError | ApiErrorForm;

export const HandleResponseError = (error: AxiosError<TApiErrorReponse>) => {
  const errorData = error.response?.data;
  const defaultErrorMessage = "Something went wrong!";
  if (error.response?.status === 401) {
    // mainStore.store.dispatch(signOutRequest());
  }

  if (errorData?.errors && errorData.errors.length > 0) {
    for (const item of errorData.errors) {
      toast.error(item.message);
    }

    throw new ApiError(defaultErrorMessage, error?.response?.status || 400);
  }

  const errorMessage = errorData?.message || defaultErrorMessage;
  toast.error(errorMessage);

  throw new ApiError(errorMessage, error?.response?.status || 400);
};
