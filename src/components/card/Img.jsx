import React from "react";
import StyledCard from "./StyledCard";

const Img = props => {
  return <StyledCard.Image src={props.path} alt="Card cap" />;
};

export default Img;
