import { HttpService } from "apis/http-service";
import REST_API_CUSTOMER from "apis/urls/customer.url";
import {
  TApiReponse,
  TCreateCustomer,
  TCreateUpdateReponse,
  TGetCustomer,
  TUpdateCustomer,
} from "types/api";
import { generatePath } from "react-router";

export const getListCustomer = async (): Promise<
  TApiReponse<TGetCustomer[]>
> => {
  const route: string = REST_API_CUSTOMER.GET_LIST.uri;

  return HttpService.get<TApiReponse<TGetCustomer[]>>(route);
};

export const getCustomerById = async (
  id?: string
): Promise<TApiReponse<TGetCustomer>> => {
  const url = generatePath(REST_API_CUSTOMER.GET_CUSTOMER.uri, { id });

  return HttpService.get<TApiReponse<TGetCustomer>>(url);
};

export const createCustomer = async (
  payload: TCreateCustomer
): Promise<TCreateUpdateReponse> => {
  const url = REST_API_CUSTOMER.CREATE.uri;

  return HttpService.post<TCreateCustomer, TCreateUpdateReponse>(url, payload);
};

export const updateCustomer = (
  customerId: string,
  payload: TUpdateCustomer
): Promise<TCreateUpdateReponse> => {
  const url = generatePath(REST_API_CUSTOMER.UPDATE.uri, {
    id: customerId,
  });

  return HttpService.put<TUpdateCustomer, TCreateUpdateReponse>(url, payload);
};
