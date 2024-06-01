import React from 'react';
import styled from 'styled-components';

const PrimaryButton = styled.button`
    min-width: ${({ size }) => (size === 'large' ? '170px' : size === 'mid' ? '90px' : '28px')};
    height: ${({ size }) => (size === 'large' ? '40px' : size === 'mid' ? '40px' : '28px')};
    width: ${({ size }) => (size === 'large' ? '170px' : size === 'mid' ? '90px' : '28px')};
    font-family: 'DXSamgakGimbap Light';
    font-size: 16px;
    border-radius: 6px;
    border: hidden;
    color: ${({ disabled }) => (disabled ? 'white' : 'white')};
    background-color: ${({ disabled }) => (disabled ? '#A9A9A9' : '#127FFF')};
    &:hover {
        cursor: pointer;
    }
`;
const SecondaryButton = styled.button`
    min-width: ${({ size }) => (size === 'large' ? '170px' : size === 'mid' ? '90px' : '28px')};
    height: ${({ size }) => (size === 'large' ? '40px' : size === 'mid' ? '40px' : '28px')};
    width: ${({ size }) => (size === 'large' ? '170px' : size === 'mid' ? '90px' : '28px')};
    font-family: 'DXSamgakGimbap Light';
    font-size: 16px;
    border-radius: 6px;
    border: ${({ outline }) => (outline ? '2px #127FFF solid' : 'hidden')};
    color: ${({ disabled }) => (disabled ? 'white' : 'black')};
    background-color: ${({ disabled }) => (disabled ? '#A9A9A9' : 'white')};
    &:hover {
        cursor: pointer;
    }
`;
const TertiaryButton = styled.button`
  min-width: ${({ size }) =>
    size === "large" ? "170px" : size === "mid" ? "90px" : "28px"};
  height: ${({ size }) =>
    size === "large" ? "40px" : size === "mid" ? "40px" : "28px"};
  width: ${({ size }) =>
    size === "large" ? "170px" : size === "mid" ? "90px" : "28px"};
  font-family: 'DXSamgakGimbap Light';
  font-size: 14px;
  border-radius: 6px;
  border: hidden;
  color: ${({ disabled }) => (disabled ? 'white' : 'black')};;
  background-color: ${({ disabled }) => (disabled ? '#A9A9A9' : '#FFD912')};;
  &:hover {
    cursor: pointer;
  }
`;

const ContainedButton = ({ btnType, text, size, onClick, outline, disabled }) => {
    return (
        <>
            {btnType === 'primary' ? (
                <PrimaryButton size={size} onClick={onClick} disabled={disabled}>
                    {text}
                </PrimaryButton>
            ) : btnType === 'secondary' ? (
                <SecondaryButton size={size} onClick={onClick} outline={outline} disabled={disabled}>
                    {text}
                </SecondaryButton>
            ) : (
                <TertiaryButton size={size} onClick={onClick} disabled={disabled}>
                    {text}
                </TertiaryButton>
            )}
            
        </>
    );
};

export default ContainedButton;
