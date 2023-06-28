const REST_API_CUSTOMER = {
  GET_LIST: {
    uri: "/v1/admin/customer/list",
    method: "GET",
  },
  GET_CUSTOMER: {
    uri: "/v1/admin/customer/get/:id",
    method: "GET",
  },
  CREATE: {
    uri: "/v1/admin/customer/create",
    method: "POST",
  },
  UPDATE: {
    uri: "/v1/admin/customer/update/:id",
    method: "PUT",
  },
};

export default REST_API_CUSTOMER;
