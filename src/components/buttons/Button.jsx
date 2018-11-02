import React from "react";

const Button = props => {
  return (
    <button
      type={props.type}
      className={props.customClass}
      onClick={props.action}
      data-name={props.dataName}
    >
      {props.text}{" "}
    </button>
  );
};

export default Button;
