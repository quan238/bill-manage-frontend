import React from "react";
import MuiTheme from "theme/MuiTheme";
import SnackbarProvider from "components/Snackbar/SnackbarProvider";
import Routes from "routes";
import "simplebar/dist/simplebar.min.css";
import { AuthProvider } from "contexts";
import { QueryClientProvider } from "react-query";
import config, { queryClient } from "config";
import { ReactQueryDevtools } from "react-query/devtools";
import ReactHotToast from "theme/styles/React-hot-toast";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <MuiTheme>
            <ReactQueryDevtools initialIsOpen={false} />
            <SnackbarProvider>
              <Routes />
            </SnackbarProvider>
          </MuiTheme>
        </AuthProvider>
      </QueryClientProvider>
      <ReactHotToast>
        <Toaster
          position={config.publicRuntimeConfig.toastPosition}
          toastOptions={{ className: "react-hot-toast" }}
        />
      </ReactHotToast>
    </>
  );
}

export default App;
