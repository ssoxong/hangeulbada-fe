import React from 'react';
import styled from 'styled-components';

import { RemoveIcon, RightTriangle } from '../../assets/icons';
import { removeQuestion } from '../../utils/api/question';

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
  font-family: 'DXSamgakGimbap Light';
  font-size: 16px;
  
  .item-idx {
    margin-right: 30px;
  }
  .item-content {
    text-align: start;
    flex-basis: 75%;
  }
  .item-button {
    margin-left: 20px;
    white-space: pre-line;
    flex-basis: 5%;

    &:hover {
      cursor: pointer;
    }
  }
`;
const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  border-width: 0;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;

const ProblemCard = ({ idx, content, sound, isRemove, id, questions, setQuestions }) => {

  const removeOnClick = () => {
    const requestRemove = async (workbookId) => {
     await removeQuestion(workbookId)
       .then((res) => {
         const filtered = questions.filter((value, idx, arr) => {
           return value.id !== workbookId;
         })
         setQuestions(filtered);
       })
    }
    requestRemove(id);
  }

  return (
    <ProblemCardLayout>
      <ProblemCardInformation>
        <div className='item-idx'>{idx}번</div>
        <div className='item-content'>{content}</div>
        {isRemove ? (
          <RemoveButton onClick={removeOnClick}>
            <img src={RemoveIcon} alt="remove" />
          </RemoveButton>
        ) : (
          <img className='item-button' src={RightTriangle} alt='button' />
        )}
      </ProblemCardInformation>
    </ProblemCardLayout>
  );
};

export default ProblemCard;