import MuiTheme from "theme/MuiTheme";
import SnackbarProvider from "components/Snackbar/SnackbarProvider";
import Routes from "routes";

import "simplebar/dist/simplebar.min.css";

function App() {
  return (
    <MuiTheme>
      <SnackbarProvider>
        <Routes />
      </SnackbarProvider>
    </MuiTheme>
  );
}

export default App;
