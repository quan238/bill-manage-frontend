export type TGetListCustomers = {
  _id: string;
  customerId: string;
  name: string;
  address: string;
  phoneNumber: string;
  createdAt: string;
  updatedAt: string;
};

export type TCreateCustomer = {
  customerId: string;
  name: string;
  address: string;
  phoneNumber?: string;
  email?: string;
  note?: string;
};
