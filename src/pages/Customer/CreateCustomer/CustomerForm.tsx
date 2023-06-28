import { FC, useState } from "react";
import { Button, Card, Grid, TextField } from "@mui/material";
import * as yup from "yup";
import { Formik } from "formik";
import { FlexBox } from "components/Flex-box";
import MyImage from "components/Image";
import DropZone from "components/Dropzone";
import { UploadImageBox, StyledClear } from "components/Table/StyledComponents";

// ** Types
import { TCreateCustomer } from "types/api";

// ================================================================
type CustomerFormProps = {
  initialValues: TCreateCustomer;
  handleFormSubmit: (values: TCreateCustomer) => void;
  validationSchema: yup.SchemaOf<TCreateCustomer>;
};

// ================================================================

const CustomerForm: FC<CustomerFormProps> = (props) => {
  const { initialValues, validationSchema, handleFormSubmit } = props;

  const [files, setFiles] = useState([]);

  // HANDLE UPDATE NEW IMAGE VIA DROP ZONE
  const handleChangeDropZone = (files: File[]) => {
    files.forEach((file) =>
      Object.assign(file, { preview: URL.createObjectURL(file) })
    );
    setFiles(files);
  };

  // HANDLE DELETE UPLOAD IMAGE
  const handleFileDelete = (file: File) => () => {
    setFiles((files) => files.filter((item) => item.name !== file.name));
  };

  return (
    <Card sx={{ p: 6 }}>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="customerId"
                  label="Mã Khách Hàng*"
                  color="info"
                  size="medium"
                  placeholder="Mã Khách Hàng"
                  value={values.customerId}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.customerId && !!errors.customerId}
                  helperText={
                    (touched.customerId && errors.customerId) as string
                  }
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="name"
                  label="Tên Khách Hàng"
                  color="info"
                  size="medium"
                  placeholder="Tên Khách Hàng"
                  value={values.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.name && !!errors.name}
                  helperText={(touched.name && errors.name) as string}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="phoneNumber"
                  label="Số điện thoại"
                  color="info"
                  size="medium"
                  placeholder="Số điện thoại"
                  value={values.phoneNumber}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.phoneNumber && !!errors.phoneNumber}
                  helperText={
                    (touched.phoneNumber && errors.phoneNumber) as string
                  }
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="email"
                  label="Email"
                  color="info"
                  size="medium"
                  type="email"
                  placeholder="Email"
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.email && !!errors.email}
                  helperText={(touched.email && errors.email) as string}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="address"
                  label="Địa chỉ"
                  color="info"
                  size="medium"
                  placeholder="Địa chỉ"
                  value={values.address}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.address && !!errors.address}
                  helperText={(touched.address && errors.address) as string}
                />
              </Grid>

              <Grid item xs={12}>
                <DropZone
                  title="Drop & drag avatar"
                  onChange={(files) => handleChangeDropZone(files)}
                />

                <FlexBox flexDirection="row" mt={2} flexWrap="wrap" gap={1}>
                  {files.map((file, index) => (
                    <UploadImageBox key={index}>
                      <MyImage src={file.preview} width="100%" />
                      <StyledClear onClick={handleFileDelete(file)} />
                    </UploadImageBox>
                  ))}
                </FlexBox>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  rows={6}
                  multiline
                  fullWidth
                  color="info"
                  size="medium"
                  name="note"
                  label="Ghi chú"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Ghi chú"
                  value={values.note}
                  error={!!touched.note && !!errors.note}
                  helperText={(touched.note && errors.note) as string}
                />
              </Grid>

              <Grid item xs={12}>
                <Button variant="contained" color="info" type="submit">
                  Create Customer
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </Card>
  );
};

export default CustomerForm;
