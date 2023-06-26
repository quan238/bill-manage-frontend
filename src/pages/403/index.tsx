import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import BazaarImage from "./components/BazaarImage";
import { FlexBox, FlexRowCenter } from "components/Flex-box";

const Error403 = () => {
  const navigate = useNavigate();
  const handleGoBack = () => navigate(-1);

  return (
    <FlexRowCenter px={2} minHeight="100vh" flexDirection="column">
      {/* <SEO title="Nothing found" /> */}
      <BazaarImage
        src="/assets/images/illustrations/403.svg"
        sx={{ display: "block", maxWidth: 320, width: "100%", mb: 3 }}
      />

      <FlexBox flexWrap="wrap">
        <Link to="/login">
          <Button variant="contained" color="primary" sx={{ m: 1 }}>
            Go to Login
          </Button>
        </Link>
      </FlexBox>
    </FlexRowCenter>
  );
};

export default Error403;
