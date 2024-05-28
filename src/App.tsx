import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "setup/theme";
import { store } from "setup/store";

import Root from "scenes/pages";
import { Rooms } from "scenes/pages/rooms";
import SingleRoom from "scenes/pages/rooms/single";
import Login from "scenes/pages/register/login";
import { ReserveHistory } from "scenes/pages/user_profile/reserve_history";
import { Sign_Up } from "scenes/pages/register/signUp";
import { RestPassword } from "scenes/pages/register/reset_password";

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
            <Route path="/login" element={<Login />} />
            <Route path="/Register" element={<RestPassword />} />
            <Route path="/Sign_Up" element={<Sign_Up />} />

            <Route path="/reserve-history" element={<ReserveHistory />} />
          </Routes>
        </ThemeProvider>
      </Provider>
    </Fragment>
  );
};
