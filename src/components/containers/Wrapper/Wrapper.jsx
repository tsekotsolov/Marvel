import React from "react";
import Navigation from "../../navigation/Navigation";
import styled from "styled-components";

const Wrapper = props => {
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
