import { Box } from "@mui/material";
import { useGetCustomer, useUpdateCustomer } from "apis";
import { H3 } from "components/Typography";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import CustomerForm from "../CustomerForm";
import * as yup from "yup";
import { Loading } from "components/Loading";
import { toast } from "react-hot-toast";

// form field validation schema
const validationSchema = yup.object().shape({
  name: yup.string().optional(),
  address: yup.string().optional(),
  phoneNumber: yup.string().optional(),
  email: yup.string().optional().email("Invalid email"),
  note: yup.string().optional(),
});

export default function UpdateCustomerPage() {
  const params = useParams();
  const navigate = useNavigate();

  const { data: customerDetail } = useGetCustomer(params.id, () => {
    navigate("/customers");
  });

  const { mutate, isLoading } = useUpdateCustomer(params.id);

  const handleFormSubmit = (values) => {
    if (params.id) {
      mutate(values, {
        onSuccess: () => {
          toast.success("Update customer successfully");
          navigate("/customers");
        },
      });
    }
  };

  if (!customerDetail || isLoading) return <Loading />;

  return (
    <Box py={4}>
      <H3 mb={2}>Update Customer </H3>

      <CustomerForm
        type="update"
        initialValues={customerDetail?.data}
        validationSchema={validationSchema}
        handleFormSubmit={handleFormSubmit}
      />
    </Box>
  );
}
