import React from 'react';
import styled from 'styled-components';
import { BottomTriangle } from '../../../assets/icons';

const StyledButton = styled.button`
  min-width: 170px;
  height: 40px;
  font-size: 18px;
  font-weight: 300;
  border-radius: 6px;
  border: hidden;
  color: black;
  background-color: white;

  &:hover {
    cursor: pointer;
  }
`;
const ButtonLayout = styled.div`
  display: flex;
  justify-content: space-around;
`;

const SortButton = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <ButtonLayout>
        정렬 옵션
        <img src={BottomTriangle} alt="bottom-triangle" />
      </ButtonLayout>
    </StyledButton>
  );
};

export default SortButton;