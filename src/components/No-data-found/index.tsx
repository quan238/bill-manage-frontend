import { Box } from "@mui/material";
import MyImage from "components/Image";
import React from "react";

export default function NoDataFound() {
  return (
    <Box width={"100%"} display="flex" justifyContent="center">
      <MyImage
        sx={{ maxWidth: 500, maxHeight: 500, margin: "0 auto" }}
        src="/assets/images/illustrations/no-data.png"
        alt="facebook"
      />
    </Box>
  );
}
