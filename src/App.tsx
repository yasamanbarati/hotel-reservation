import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "setup/theme";
import { store } from "setup/store";

import Root from "scenes/pages";
import { Rooms } from "scenes/pages/rooms";
import SingleRoom from "scenes/pages/rooms/single";

export const App = () => {
  return (
    <Fragment>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Root />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/rooms/:id" element={<SingleRoom />} />
          </Routes>
        </ThemeProvider>
      </Provider>
    </Fragment>
  );
};
