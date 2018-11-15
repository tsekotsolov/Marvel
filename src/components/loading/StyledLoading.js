import styled from "styled-components";

export const LoaderWrapper = styled.div`
  border: 5px solid white;
  border-top: 5px solid #f44336;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
