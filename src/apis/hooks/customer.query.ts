import {
  createCustomer,
  getCustomerById,
  getListCustomer,
  updateCustomer,
} from "apis/axios";
import REST_API_CUSTOMER from "apis/urls/customer.url";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  TApiError,
  TApiReponse,
  TCreateCustomer,
  TCreateUpdateReponse,
  TGetCustomer,
  TGetReponse,
  TUpdateCustomer,
} from "types/api";
import { TMutationOptions, TQueryOptions } from "types/common";

export function useGetListCustomer(request?: TQueryOptions) {
  return useQuery<TApiReponse<TGetCustomer[]>, TApiError>(
    [...Object.values(REST_API_CUSTOMER.GET_LIST)],
    getListCustomer,
    request?.queryConfig
  );
}

export function useGetCustomer(id?: string, onError?: () => void) {
  return useQuery<TGetReponse<TGetCustomer>, TApiError>(
    [...Object.values(REST_API_CUSTOMER.GET_CUSTOMER), id],
    () => getCustomerById(id),
    {
      onError: onError,
      cacheTime: 0,
    }
  );
}

export function useCreateCustomer() {
  const queryClient = useQueryClient();

  return useMutation<TCreateUpdateReponse, TApiError, TCreateCustomer>(
    createCustomer,
    {
      onSuccess: () => {
        return queryClient.invalidateQueries([
          ...Object.values(REST_API_CUSTOMER.GET_LIST),
        ]);
      },
    }
  );
}

export const useUpdateCustomer = (
  customerId: string,
  options?: TMutationOptions["queryConfig"]
) => {
  return useMutation<TCreateUpdateReponse, TApiError, TUpdateCustomer>(
    [...Object.values(REST_API_CUSTOMER.UPDATE), customerId],
    (payload) => updateCustomer(customerId, payload),
    options
  );
};
