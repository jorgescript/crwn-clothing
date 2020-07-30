import styled from "styled-components";

export const SignInContainer = styled.div`
  flex: 0 0 45%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    flex: 1;
    margin-bottom: 80px;
  }
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
