import React from "react";

const ErrorMessage = ({ showErrorMessage, errorMessage }) => {
  return <div> {showErrorMessage && <p>{errorMessage}</p>}</div>;
};

export default ErrorMessage;
