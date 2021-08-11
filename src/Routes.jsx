import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import DisplayfilePage from "./components/DisplayfilePage";
import { ROUTES } from "./components/utilities/utils";
import UploadFilePage from "./components/UploadFilePage";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.signIn}>
          <LoginPage />
        </Route>
        <Route path={ROUTES.uploadFile}>
          <UploadFilePage />
        </Route>
        <Route path={ROUTES.displayFile}>
          <DisplayfilePage />
        </Route>
        {/* <Route path={ROUTES.forgotPassword}>
          <ForgotPassword />
        </Route>
        <ProtectedRoute path={ROUTES.profile}>
          <Profile />
        </ProtectedRoute> */}
        <Route path="/">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
