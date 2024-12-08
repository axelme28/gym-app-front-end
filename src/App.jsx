// src/App.js
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./store/store.js"; // Import both store and persistor
import Router from "./routes/index";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "animate.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#4a90e2",
    },
  },
});

import "./styles/index.css";

function App() {
  return (
    <Provider store={store}>
      {/* PersistGate ensures Redux state is rehydrated before rendering */}
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Router />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
