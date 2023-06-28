import { getListCustomer } from "apis/axios";
import REST_API_CUSTOMER from "apis/urls/customer.url";
import { useQuery } from "react-query";
import { TApiError, TApiReponse, TGetListCustomers } from "types/api";
import { TQueryOptions } from "types/common";

export function useGetListCustomer(request?: TQueryOptions) {
  return useQuery<TApiReponse<TGetListCustomers[]>, TApiError>(
    [...Object.values(REST_API_CUSTOMER.GET_LIST)],
    getListCustomer,
    request?.queryConfig
  );
}
