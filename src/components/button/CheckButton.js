import React from 'react';
import styled from 'styled-components';
import { CheckOn } from '../../assets/icons';

const StyledCheckButton = styled.input`
  appearance: none;
  width: 18.37px;
  height: 18.37px;
  border: 2px solid #127FFF;
  border-radius: 100%;
  cursor: pointer;

  &:checked {
    border: transparent;
    background-image: url(${CheckOn});
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
`;

const CheckButton = ({ onChange }) => {
  return (
    <StyledCheckButton 
      type="checkbox"
      onChange={onChange}
    />
  );
};

export default CheckButton;