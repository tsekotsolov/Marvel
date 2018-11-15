import React from "react";
import styled from "styled-components";

const StyledNoItems = styled.div`
  margin: 0 auto;

  h3 {
    font-family: "Avengeance";
  }
`;

const NoItems = props => {
  return (
    <StyledNoItems>
      <h3>{props.text}</h3>
    </StyledNoItems>
  );
};

export default NoItems;
