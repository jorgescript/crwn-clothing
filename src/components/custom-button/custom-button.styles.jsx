import styled, { css } from "styled-components";

const GoogleButton = css`
  background-color: #4285f4;
  color: #ffffff;

  &:hover {
    background-color: #357ae8;
    border: 1px solid #357ae8;
    color: #ffffff;
  }
`;

const InvertedButton = css`
  background-color: #ffffff;
  border: 1px solid #000000;
  color: #000000;

  &:hover {
    background-color: #000000;
    color: #ffffff;
  }
`;

const getStylesButton = ({ isGoogleButton, inverted }) => {
  if (isGoogleButton) return GoogleButton;
  if (inverted) return InvertedButton;
  return "";
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: #000000;
  color: #ffffff;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: 1px solid transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #ffffff;
    border: 1px solid #000000;
    color: #000000;
  }

  ${getStylesButton}
`;
