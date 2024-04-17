import React, { useState } from 'react';
import styled from 'styled-components';
import Dropdown from '../../../components/button/Dropdown';

const StyledButton = styled.button`
  min-width: 170px;
  height: 40px;
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

const SortButton = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickButton = () => {
    setIsOpen(!isOpen);
    console.log(isOpen)
  }

  return (
    <StyledButton onClick={onClickButton}>
      <ButtonLayout>
        <Dropdown text="정렬 옵션" items={items}/>
      </ButtonLayout>
    </StyledButton>
  );
};

export default SortButton;