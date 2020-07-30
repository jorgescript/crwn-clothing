import styled from "styled-components";

export const SignUpContainer = styled.div`
  flex: 0 0 45%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    flex: 1;
  }
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;
