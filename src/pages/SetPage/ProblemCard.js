import React from 'react';
import styled from 'styled-components';

import { RightTriangle } from '../../assets/icons';

const ProblemCardLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: stretch;
  align-items: center;
  padding: 8px 16px;
  margin: 5px 15px;
  border-radius: 14px;
  background-color: white;
`;
const ProblemCardInformation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

  .item-idx {
    margin-right: 30px;
  }
  .item-text {
    text-align: start;
    flex-basis: 80%;
  }
  .item-button {
    white-space: pre-line;
    flex-basis: 5%;

    &:hover {
      cursor: pointer;
    }
  }
`;

const ProblemCard = ({ idx, text, sound }) => {
  return (
    <ProblemCardLayout>
      <ProblemCardInformation>
        <div className='item-idx'>{idx}</div>
        <div className='item-text'>{text}</div>
        <img className='item-button' src={RightTriangle} alt='button' />
      </ProblemCardInformation>
    </ProblemCardLayout>
  );
};

export default ProblemCard;