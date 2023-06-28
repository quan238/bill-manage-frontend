import { createCustomer, getListCustomer } from "apis/axios";
import REST_API_CUSTOMER from "apis/urls/customer.url";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  TApiError,
  TApiReponse,
  TCreateCustomer,
  TCreateReponse,
  TGetListCustomers,
} from "types/api";
import { TQueryOptions } from "types/common";

export function useGetListCustomer(request?: TQueryOptions) {
  return useQuery<TApiReponse<TGetListCustomers[]>, TApiError>(
    [...Object.values(REST_API_CUSTOMER.GET_LIST)],
    getListCustomer,
    request?.queryConfig
  );
}

export function useCreateCustomer() {
  const queryClient = useQueryClient();

  return useMutation<TCreateReponse, TApiError, TCreateCustomer>(
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
