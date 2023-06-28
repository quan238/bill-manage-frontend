import { Box } from "@mui/material";
import { H3 } from "components/Typography";
import React from "react";
import CustomerForm from "../CustomerForm";
import * as yup from "yup";
import { TCreateCustomer } from "types/api";
import { useCreateCustomer } from "apis";
import { Loading } from "components/Loading";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const INITIAL_VALUES: TCreateCustomer = {
  customerId: "PC08AA0100003",
  name: "Quan Tran",
  address: "74A Luong Tan Thinh",
  phoneNumber: "",
  email: "",
  note: "",
};

// form field validation schema
const validationSchema = yup.object().shape({
  customerId: yup.string().required("Customer ID is required"),
  name: yup.string().required("Name is required"),
  address: yup.string().required("Address is required"),
  phoneNumber: yup.string().optional(),
  email: yup.string().optional().email("Invalid email"),
  note: yup.string().optional(),
});

export default function CreateCustomerPage() {
  const { mutate: createCustomer, isLoading: loadingCreateCustomer } =
    useCreateCustomer(); // Create Draft || Submit GOP first time
  const navigate = useNavigate();

  const handleFormSubmit = (values) => {
    createCustomer(values, {
      onSuccess: () => {
        toast.success("Create customer successfully");
        navigate("/customers");
      },
    });
  };

  if (loadingCreateCustomer) return <Loading />;

  return (
    <Box py={4}>
      <H3 mb={2}>Create New Customer</H3>

      <CustomerForm
        initialValues={INITIAL_VALUES}
        validationSchema={validationSchema}
        handleFormSubmit={handleFormSubmit}
      />
    </Box>
  );
}
