import * as React from "react";
import styled from "styled-components";

interface IProps {
  action: () => void;
  dataName: string;
  submit?: string;
  text: string;
}

const StyledButton: any = styled.button`
  border: transparent;
  border-radius: 3px;
  padding-top: 0.5rem;
  text-transform: uppercase;
  margin: 0.2vw;
  width: 100px;
  cursor: pointer;
  color: white;
  background-color: ${(props: IProps) =>
    props.submit ? "#f44336" : "#9DC59D;"};
  color: ${(props: IProps) => (props.submit ? "white;" : "black;")};
  :focus {
    outline: 0;
  }
`;

const Button = (props: IProps) => {
  return (
    <StyledButton
      onClick={props.action}
      data-name={props.dataName}
      submit={props.submit}
    >
      {props.text}
    </StyledButton>
  );
};

export default Button;
