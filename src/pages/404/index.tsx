import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import BazaarImage from "./components/BazaarImage";
import { FlexBox, FlexRowCenter } from "components/Flex-box";

const Error404 = () => {
  const navigate = useNavigate();
  const handleGoBack = () => navigate(-1);

  return (
    <FlexRowCenter px={2} minHeight="100vh" flexDirection="column">
      {/* <SEO title="Nothing found" /> */}
      <BazaarImage
        src="/assets/images/illustrations/404.svg"
        sx={{ display: "block", maxWidth: 320, width: "100%", mb: 3 }}
      />

      <FlexBox flexWrap="wrap">
        <Button
          variant="outlined"
          color="primary"
          sx={{ m: 1 }}
          onClick={handleGoBack}
        >
          Go Back
        </Button>

        <Link to="/">
          <Button variant="contained" color="primary" sx={{ m: 1 }}>
            Go to Home
          </Button>
        </Link>
      </FlexBox>
    </FlexRowCenter>
  );
};

export default Error404;
