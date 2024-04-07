import React from 'react';
import styled from 'styled-components';

const PrimaryButton = styled.button`
  min-width: ${({ size }) =>
    size === "large" ? "170px" : size === "mid" ? "90px" : "28px"};
  height: ${({ size }) =>
    size === "large" ? "40px" : size === "mid" ? "40px" : "28px"};

  font-size: 18px;
  font-weight: 300;
  border-radius: 6px;
  border: hidden;
  color: white;
  background-color: #127FFF;
`;
const SecondaryButton = styled.button`
  min-width: ${({ size }) =>
    size === "large" ? "170px" : size === "mid" ? "90px" : "28px"};
  height: ${({ size }) =>
    size === "large" ? "40px" : size === "mid" ? "40px" : "28px"};

  font-size: 18px;
  font-weight: 300;
  border-radius: 6px;
  border: ${({ outline }) =>
    outline ? "2px #127FFF solid" : "hidden" };
  color: black;
  background-color: white;
`;
const TertiaryButton = styled.button`
  min-width: ${({ size }) =>
    size === "large" ? "170px" : size === "mid" ? "90px" : "28px"};
  height: ${({ size }) =>
    size === "large" ? "40px" : size === "mid" ? "40px" : "28px"};
  
  font-size: 18px;
  font-weight: 300;
  border-radius: 6px;
  border: hidden;
  color: black;
  background-color: yellow;
`;

const ContainedButton = ({ btnType, text, size, onClick, outline }) => {
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
          outline={outline}
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