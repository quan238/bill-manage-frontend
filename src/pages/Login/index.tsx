// ** React Imports
import { FC, useCallback, useState } from "react";

// ** MUI Components
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Box, { BoxProps } from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled, useTheme } from "@mui/material/styles";
import MuiFormControlLabel, {
  FormControlLabelProps,
} from "@mui/material/FormControlLabel";

// ** Third Party Imports
import * as yup from "yup";

// ** Import
import { Link } from "react-router-dom";
import { H1, Paragraph } from "components/Typography";
import { useAuth } from "hooks/useAuth";
import FooterIllustrations from "./components/FooterIllustrations";
import MyTextField from "components/Form/TextField";
import { useFormik } from "formik";
import EyeToggleButton from "./components/EyeToggleButton";
import SocialButtons from "./components/SocialButtons";
import { toast } from "react-hot-toast";

// ** Styled Components
const LoginIllustrationWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  padding: theme.spacing(20),
  paddingRight: "0 !important",
  [theme.breakpoints.down("lg")]: {
    padding: theme.spacing(10),
  },
}));

const LoginIllustration = styled("img")(({ theme }) => ({
  maxWidth: "48rem",
  [theme.breakpoints.down("xl")]: {
    maxWidth: "38rem",
  },
  [theme.breakpoints.down("lg")]: {
    maxWidth: "30rem",
  },
}));

const RightWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.up("md")]: {
    maxWidth: 400,
  },
  [theme.breakpoints.up("lg")]: {
    maxWidth: 450,
  },
}));

const BoxWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.down("md")]: {
    maxWidth: 400,
  },
}));

const FormControlLabel = styled(MuiFormControlLabel)<FormControlLabelProps>(
  ({ theme }) => ({
    "& .MuiFormControlLabel-label": {
      fontSize: "0.875rem",
      color: theme.palette.text.secondary,
    },
  })
);

const fbStyle = { background: "#3B5998", color: "white" };
const googleStyle = { background: "#4285F4", color: "white" };

type WrapperProps = { passwordvisibility?: boolean };

export const Wrapper = styled<FC<WrapperProps & BoxProps>>(
  ({ children, ...rest }) => (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        overflowY: "hidden",
        position: "relative",
        minHeight: (theme) =>
          `calc(100vh - ${theme.spacing(
            (theme.mixins.toolbar.minHeight as number) / 4
          )})`,
      }}
      {...rest}
    >
      {children}
    </Box>
  )
)<BoxProps>(({ theme, passwordvisibility = false }) => ({
  [theme.breakpoints.down("sm")]: { width: "100%" },
  ".passwordEye": {
    color: passwordvisibility
      ? theme.palette.grey[600]
      : theme.palette.grey[400],
  },
  ".facebookButton": { marginBottom: 10, ...fbStyle, "&:hover": fbStyle },
  ".googleButton": { ...googleStyle, "&:hover": googleStyle },
  ".agreement": { marginTop: 12, marginBottom: 24 },
}));

interface FormData {
  email: string;
  password: string;
}

const LoginPage = () => {
  const [rememberMe, setRememberMe] = useState<boolean>(true);
  const [passwordvisibility, setPasswordVisibility] = useState(false);

  // ** Hooks
  const auth = useAuth();
  const theme = useTheme();
  const hidden = useMediaQuery(theme.breakpoints.down("md"));

  const onSubmit = (data: FormData) => {
    const { email, password } = data;
    auth.login({ email, password, rememberMe }, () => {
      setFieldError("email", "Email or Password is invalid");
      toast.error("Email or Password is invalid");
    });
  };

  const {
    values,
    errors,
    touched,
    setFieldError,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues,
    onSubmit,
    validationSchema: formSchema,
  });

  const togglePasswordVisibility = useCallback(() => {
    setPasswordVisibility((visible) => !visible);
  }, []);

  const imageSource = "auth-v2-login-illustration-bordered";

  return (
    <Wrapper passwordvisibility={passwordvisibility}>
      {!hidden ? (
        <Box
          sx={{
            flex: 1,
            display: "flex",
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LoginIllustrationWrapper>
            <LoginIllustration
              alt="login-illustration"
              src={`/assets/images/illustrations/${imageSource}-${theme.palette.mode}.png`}
            />
          </LoginIllustrationWrapper>
          <FooterIllustrations />
        </Box>
      ) : null}
      <RightWrapper
        sx={
          true && !hidden
            ? { borderLeft: `1px solid ${theme.palette.divider}` }
            : {}
        }
      >
        <Box
          sx={{
            p: 7,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "background.paper",
          }}
        >
          <BoxWrapper>
            <Box sx={{ mb: 6 }}>
              <H1>Welcome You 👋🏻</H1>
              <Paragraph>Đăng nhập vào hệ thống quản trị</Paragraph>
            </Box>
            <form onSubmit={handleSubmit}>
              <MyTextField
                mb={1.5}
                fullWidth
                name="email"
                size="small"
                type="email"
                variant="outlined"
                onBlur={handleBlur}
                value={values.email}
                onChange={handleChange}
                label="Email or Phone Number"
                placeholder="exmple@mail.com"
                error={!!touched.email && !!errors.email}
                helperText={(touched.email && errors.email) as string}
              />

              <MyTextField
                mb={2}
                fullWidth
                size="small"
                name="password"
                label="Password"
                autoComplete="on"
                variant="outlined"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                placeholder="*********"
                type={passwordvisibility ? "text" : "password"}
                error={!!touched.password && !!errors.password}
                helperText={(touched.password && errors.password) as string}
                InputProps={{
                  endAdornment: (
                    <EyeToggleButton
                      show={passwordvisibility}
                      click={togglePasswordVisibility}
                    />
                  ),
                }}
              />

              <Box
                sx={{
                  mb: 4,
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                }}
              >
                <FormControlLabel
                  label="Lưu đăng nhập"
                  control={
                    <Checkbox
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                  }
                />
                <Paragraph
                  sx={{ color: "primary.main", textDecoration: "none" }}
                >
                  <Link to="/forgot-password">Quên mật khẩu</Link>
                </Paragraph>
              </Box>
              <Button
                fullWidth
                type="submit"
                color="primary"
                variant="contained"
                sx={{ height: 44 }}
              >
                Login
              </Button>

              <SocialButtons />
            </form>
          </BoxWrapper>
        </Box>
      </RightWrapper>
    </Wrapper>
  );
};

const initialValues = {
  email: "superadmin@mail.com",
  password: "aaAA@@123444",
};

const formSchema = yup.object().shape({
  password: yup.string().required("Password is required"),
  email: yup.string().email("Email is invalid").required("Email is required"),
});

export default LoginPage;
