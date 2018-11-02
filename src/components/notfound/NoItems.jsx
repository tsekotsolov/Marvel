import React from "react";

const NoItems = props => {
  return (
    <div className="no-items">
      <h3>{props.text}</h3>
    </div>
  );
};

export default NoItems;
