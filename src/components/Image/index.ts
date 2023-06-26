import { compose, display, spacing, styled } from "@mui/system";

const MyImage = styled("img")(compose(spacing, display));

MyImage.defaultProps = { display: "block" };

export default MyImage;
