import MuiTheme from "theme/MuiTheme";
import SnackbarProvider from "components/Snackbar/SnackbarProvider";
import Routes from "routes";
import "simplebar/dist/simplebar.min.css";
import { AuthProvider } from "contexts";

function App() {
  return (
    <AuthProvider>
      <MuiTheme>
        <SnackbarProvider>
          <Routes />
        </SnackbarProvider>
      </MuiTheme>
    </AuthProvider>
  );
}

export default App;
