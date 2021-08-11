import React, { useState } from "react";
import "./styles/LoginPage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { checkLoginCredentials, ROUTES } from "./utilities/utils";
import { useHistory } from "react-router-dom";

function LoginPage() {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();

  const handleInput = (e) => {
    if (e.target.id === "user-name") {
      setLoginData({ ...loginData, userName: e.target.value });
    } else if (e.target.id === "password") {
      setLoginData({ ...loginData, password: e.target.value });
    }
  };

  console.log(loginData);

  const handleSubmit = () => {
    if (loginData.userName !== "" || undefined || null) {
      if (
        checkLoginCredentials(loginData.userName, loginData.password) ===
        "success"
      ) {
        history.push(ROUTES.uploadFile);
      }
    } else alert("Please Enter userName");
  };
  return (
    <div className="container">
      <form className="form-box">
        <div className="input-group">
          <span className="input-group-icon">
            <FontAwesomeIcon icon={faUser} />
          </span>
          <input
            id="user-name"
            type="text"
            className="form-control"
            placeholder="Username"
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="input-group">
          <span className="input-group-icon">
            <FontAwesomeIcon icon={faLock} />
          </span>
          <input
            id="password"
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => handleInput(e)}
          />
        </div>
        <button onClick={handleSubmit} type="button" className="login-button">
          LOGIN
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
