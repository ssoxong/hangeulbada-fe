import React, { useState } from 'react';
import styled from 'styled-components';
import { BottomTriangle } from '../../../assets/icons';

const DropdownLayout = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  min-width: 170px;
  height: 40px;
  font-family: 'DXSamgakGimbap Medium';
  font-size: 16px;
  border-radius: 5px;
  border: hidden;
  color: black;
  background-color: white;
  z-index: 2;
  .image {
    margin-left: 12px;
  }
  &:hover {
    cursor: pointer;
  }
`;

const DropdownContent = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  border-radius: 5px;
  background-color: #f9f9f9;
  min-width: 170px;
  box-shadow: 4px 5px 6px 0px rgba(0,0,0,0.4);
  z-index: 1;
`;

const DropdownItem = styled.a`
  color: black;
  padding: 12px 16px;
  font-family: 'DXSamgakGimbap Light';
  font-size: 16px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: rgba(18, 127, 255, 0.3);
  }
`;

// 드롭다운 컴포넌트
const Dropdown = ({ text, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const itemOnClick = (onClick) => {
    onClick();
    setIsOpen(false);
  }

  return (
    <DropdownLayout>
      <DropdownButton onClick={toggleDropdown}>
        {text}
        <img className='image'src={BottomTriangle} alt="bottom-triangle" />
      </DropdownButton>
      <DropdownContent isOpen={isOpen}>
        {items.map((item, index) => (
          <DropdownItem key={index} onClick={() =>itemOnClick(item.onClick)}>
            {item.text}
          </DropdownItem>
        ))}
      </DropdownContent>
    </DropdownLayout>
  );
};

export default Dropdown;