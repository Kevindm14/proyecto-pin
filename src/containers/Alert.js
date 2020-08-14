import React from "react";

const Alert = ({ alert }) => {
  return (
    <div className="alert text-center alert alert-dismissible alert-danger">
      <p>{alert}</p>
    </div>
  );
};

export default Alert;