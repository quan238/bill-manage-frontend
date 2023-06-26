/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react-hooks/exhaustive-deps */
// ** React Imports
import { createContext, useEffect, useState, ReactNode } from "react";

// ** Axios
import axios from "axios";

// ** Config
import config from "config";

// ** Types
import {
  AuthValuesType,
  RegisterParams,
  LoginParams,
  ErrCallbackType,
  UserDataType,
} from "types/context";
import { useLocation, useNavigate } from "react-router-dom";
import { useLogin } from "apis";
import { toast } from "react-hot-toast";
import { TLoginResponse } from "types/api";

// ** Defaults
const defaultProvider: AuthValuesType = {
  user: null,
  accessToken: null,
  setAccessToken: () => null,
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  register: () => Promise.resolve(),
};

const AuthContext = createContext(defaultProvider);

type Props = {
  children: ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  // ** States
  const [user, setUser] = useState<UserDataType | null>(defaultProvider.user);
  const [accessToken, setAccessToken] = useState(defaultProvider.accessToken);
  const [loading, setLoading] = useState<boolean>(defaultProvider.loading);
  // ** Hooks
  // const location = useLocation();
  const navigate = useNavigate();

  // ** Query
  const { mutate: loginMutation } = useLogin({
    onSuccess: ({ data }: { data: TLoginResponse }) => {
      localStorage.setItem(config.auth.storageTokenKeyName, data.accessToken);
      setAccessToken(data.accessToken);
      navigate("/dashboard", { replace: true });
      toast.success("Login success", {
        position: "top-center",
        duration: 3000,
      });
    },
  }); //

  useEffect(() => {
    if (user) {
      setLoading(true);
    }
  }, [user]);

  useEffect(() => {
    const initAuth = async (): Promise<void> => {
      const storedToken = window.localStorage.getItem(
        config.auth.storageTokenKeyName
      )!;
      if (storedToken) {
        setLoading(true);
        // await axios
        //   .get("", {
        //     headers: {
        //       Authorization: `Bearer ${storedToken}`,
        //     },
        //   })
        //   .then(async (response) => {
        //     setLoading(false);
        //     setUser({ ...response.data });
        //     setAccessToken(storedToken);
        //   })
        //   .catch(() => {
        //     localStorage.removeItem("userData");
        //     localStorage.removeItem("refreshToken");
        //     localStorage.removeItem("accessToken");
        //     setUser(null);
        //     setLoading(false);
        //     if (
        //       config.auth.onTokenExpiration === "logout" &&
        //       !location.pathname.includes("login")
        //     ) {
        //       navigate("/login");
        //     }
        //   });
      } else {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  const handleLogin = (params: LoginParams) => {
    loginMutation(params);
  };

  const handleLogout = () => {
    setUser(null);
    window.localStorage.removeItem("userData");
    window.localStorage.removeItem(config.auth.storageTokenKeyName);
    navigate("/login");
  };

  const handleRegister = (
    params: RegisterParams,
    errorCallback?: ErrCallbackType
  ) => {
    axios
      .post("", params)
      .then((res) => {
        if (res.data.error) {
          if (errorCallback) errorCallback(res.data.error);
        } else {
          handleLogin({ email: params.email, password: params.password });
        }
      })
      .catch((err: { [key: string]: string }) =>
        errorCallback ? errorCallback(err) : null
      );
  };

  const values = {
    user,
    loading,
    accessToken,
    setAccessToken,
    setUser,
    setLoading,
    login: handleLogin,
    logout: handleLogout,
    register: handleRegister,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
