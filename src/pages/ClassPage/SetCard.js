import React from 'react';
import styled from 'styled-components';

import { ButtonIcon } from '../../assets/icons';

const SetCardLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: stretch;
  align-items: center;
  padding: 8px 16px;
  margin: 5px 15px;
  border-radius: 14px;
  background-color: white;
`;
const SetCardInformation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .item-no {
    flex-basis: 7%;
  }
  .item-name {
    flex-basis: 15%;
  }
  .item-set {
    flex-basis: 20%;
  }
  .item-score {
    white-space: pre-line;
    flex-basis: 20%;
  }
  .item-button {
    white-space: pre-line;
    flex-basis: 5%;
  }
`;

const SetCard = ({ no, name, set, score }) => {
  return (
    <SetCardLayout>
      <SetCardInformation>
        <div className='item-no'>{no}</div>
        <div className='item-name'>{name}</div>
        <div className='item-set'>{set}</div>
        <div className='item-score'>{score}</div>
        <img className='item-button' src={ButtonIcon} alt='button' />
      </SetCardInformation>
    </SetCardLayout>
  );
};

export default SetCard;