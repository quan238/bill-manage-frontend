import { HttpService } from "apis/http-service";
import REST_API_CUSTOMER from "apis/urls/customer.url";
import { TApiReponse, TGetListCustomers } from "types/api";

export const getListCustomer = async (): Promise<
  TApiReponse<TGetListCustomers[]>
> => {
  const route: string = REST_API_CUSTOMER.GET_LIST.uri;

  return HttpService.get<TApiReponse<TGetListCustomers[]>>(route);
};
