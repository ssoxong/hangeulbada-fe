import React, { useState } from 'react';
import styled from 'styled-components';

const SelectButtonLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .Box {
    margin-top: 57px;
    margin-bottom: 70px;
  }
`;
const StyledRoleBox = styled.button`
  height: 72px;
  width: 250px;
  margin: 15px;
  border-radius: 10px;
  // border-width: 1px;
  border-color: transparent;
  transition: background 0.4s;

  font-family: 'DXSamgakGimbap Light';
  font-size: 18px;
  color: black;

  &:focus {
      border-color: #127fff;
      color: white;
      background-color: #127fff;
  }
  &:hover {
        border-color: #127fff;
        color: white;
        background-color: #127fff;
    }
`;

const SelectButton = ({ action, setAction }) => {

  const loadOnClick = () => {
    setAction('load');
  };
  const createOnClick = () => {
    setAction('create');
  }

  return (
      <div>
          <SelectButtonLayout>
              <div className='Box'>
                <StyledRoleBox onClick={loadOnClick}>
                    기존 문장에서 가져오기
                </StyledRoleBox>
                <StyledRoleBox onClick={createOnClick}>
                    새로 만들기
                </StyledRoleBox>
              </div>
          </SelectButtonLayout>
      </div>
  );
};

export default SelectButton;