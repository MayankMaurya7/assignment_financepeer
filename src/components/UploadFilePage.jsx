import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import "./styles/UploadFilePage.scss";
import SignOutButton from "./utilities/SignOutButton";
import { ROUTES } from "./utilities/utils";

function UploadFilePage() {
  const ref = useRef();
  const history = useHistory();
  const check = (e) => {
    let fileName = e.target.files[0].name;
    let fileExtension = fileName.split(".").pop();
    console.log(fileExtension);
    if (fileExtension !== "json") {
      alert("Invalid file type ,Please select a json File");
      ref.current.value = "";
      return false;
    } else {
      alert(`Selected File: ${fileName}`);
    }
  };

  const handleUploadFile = (e) => {
    e.preventDefault();
    if (ref.current.value !== "") {
      alert("File uploaded successfully");
      history.push(ROUTES.displayFile);
    } else alert("Please choose a File to upload");
  };

  return (
    <div className="page-container">
      <div className="inner-container">
        <div className="navbar">
          <button
            className="goto-displaypage"
            onClick={() => history.push(ROUTES.displayFile)}
          >
            View Uploaded File
          </button>
          <SignOutButton />
        </div>
        <div className="upload_file-container">
          <h1>Select a File to Upload</h1>
          <input
            type="file"
            id="file"
            // value={selectedFile}
            ref={ref}
            className="upload_file-input"
            onChange={(e) => check(e)}
          />
          <button
            onClick={(e) => handleUploadFile(e)}
            type="submit"
            className="upload_file-button"
            accept=".json"
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}

export default UploadFilePage;
