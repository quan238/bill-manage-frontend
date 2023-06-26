import React from "react";
import MuiTheme from "theme/MuiTheme";
import SnackbarProvider from "components/Snackbar/SnackbarProvider";
import Routes from "routes";
import "simplebar/dist/simplebar.min.css";
import { AuthProvider } from "contexts";
import { QueryClientProvider } from "react-query";
import { queryClient } from "config";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
  return (
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
  );
}

export default App;
