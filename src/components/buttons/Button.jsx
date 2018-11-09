import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: transparent;
  border-radius: 3px;
  padding-top: 0.5rem;
  text-transform: uppercase;
  margin: 0.2vw;
  width: 100px;
  cursor: pointer;
  color: white;
  :focus {
    outline: 0;
  }
  background-color: ${props => (props.submit ? "#f44336" : "#9DC59D;")};
  color: ${props => (props.submit ? "white;" : "black;")};
`;

const Button = props => {
  return (
    <StyledButton
      type={props.type}
      onClick={props.action}
      data-name={props.dataName}
      submit={props.submit}
    >
      {props.text}{" "}
    </StyledButton>
  );
};

export default Button;
