import React from "react";
import { useHistory } from "react-router-dom";
import { ROUTES } from "./utils";

function SignOutButton() {
  const history = useHistory();
  return (
    <button
      onClick={() => history.push(ROUTES.signIn)}
      className="sign-out_button"
    >
      Sign Out
    </button>
  );
}

export default SignOutButton;
