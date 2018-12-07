import React from "react";
import Navigation from "../../navigation/Navigation";
import styled from "styled-components";

interface IProps {
title: string;
children:React.ReactNode;
}

const Wrapper = (props:IProps) => {
  return (
    <>
      <Navigation />
      <StyledWrapper>
        <div className="container text-center">
          <h2>{props.title}</h2>
          {props.children}
        </div>
      </StyledWrapper>
    </>
  );
};

export default Wrapper;

const StyledWrapper = styled.section`
  font-family: Verdana, Tahoma, sans-serif;
  margin-top: 6rem;

  .container {
    h2 {
      font-size: 3rem;
      font-family: "Avengeance";
    }
  }
`;
