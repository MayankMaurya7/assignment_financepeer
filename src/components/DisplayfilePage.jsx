import React from "react";
import { data } from "./utilities/uploadedData";
import "./styles/DisplayfilePage.scss";
import { ROUTES } from "./utilities/utils";
import { useHistory } from "react-router-dom";
import SignOutButton from "./utilities/SignOutButton";

function DisplayfilePage() {
  const history = useHistory();
  const theme = (userId) => {
    console.log(userId);
    console.log(userId % 2);
    if (userId % 2 === 0) return "user-wrapper even-theme";
    else return "user-wrapper odd-theme";
  };

  const renderUploadedData = () => {
    return data.map((data) => (
      <div className={theme(data?.userId)}>
        <p className="id-data">{data.id}.</p>
        <div className="text-data">
          <p className="title-data">
            {data.title}({data.userId})
          </p>
          <p className="body-data">{data.body}</p>
        </div>
      </div>
    ));
  };
  return (
    <div className="container-data">
      <div className="inner-container">
        <div className="navbar">
          <button
            className="goto-uploadpage"
            onClick={() => history.push(ROUTES.uploadFile)}
          >
            Upload new file
          </button>
          <SignOutButton />
        </div>
        {renderUploadedData()}
      </div>
    </div>
  );
}

export default DisplayfilePage;
