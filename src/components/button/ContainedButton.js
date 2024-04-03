import React from 'react';
import styled from 'styled-components';

const PrimaryButton = styled.button`
  min-width: ${({ size }) =>
    size === "large" ? "135px" : size === "mid" ? "71px" : "28px"};
  width: ${({ size }) => (size === "large" ? "100%" : "")};
  height: ${({ size }) =>
    size === "large" ? "32px" : size === "mid" ? "32px" : "28px"};

  font-size: 13px;
  font-weight: 300;
  border-radius: 6px;
  border: hidden;
  color: white;
  background-color: blue;
`;
const SecondaryButton = styled.button`
  min-width: ${({ size }) =>
      size === "large" ? "135px" : size === "mid" ? "71px" : "28px"};
  width: ${({ size }) => (size === "large" ? "100%" : "")};
  height: ${({ size }) =>
      size === "large" ? "32px" : size === "mid" ? "32px" : "28px"};

  font-size: 13px;
  font-weight: 300;
  border-radius: 6px;
  border: hidden;
  color: black;
  background-color: wheat;
`;
const TertiaryButton = styled.button`
  min-width: ${({ size }) =>
    size === "large" ? "135px" : size === "mid" ? "71px" : "28px"};
  width: ${({ size }) => (size === "large" ? "100%" : "")};
  height: ${({ size }) =>
      size === "large" ? "32px" : size === "mid" ? "32px" : "28px"};

  font-size: 13px;
  font-weight: 300;
  border-radius: 6px;
  border: hidden;
  color: black;
  background-color: yellow;
`;

const ContainedButton = ({ btnType, text, size, onClick }) => {
  return (
    <>
      {btnType === "primary" ? (
        <PrimaryButton 
          size={size}
          onClick={onClick}
        >
          {text}
        </PrimaryButton>
      ) : (btnType === "secondary" ? (
        <SecondaryButton 
          size={size}
          onClick={onClick}
        >
          {text}
        </SecondaryButton>
      ) : (
        <TertiaryButton
          size={size}
          onClick={onClick}
        >
          {text}
        </TertiaryButton>
      ))}
    </>
  );
};

export default ContainedButton;