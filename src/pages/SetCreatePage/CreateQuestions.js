import React, { useState } from 'react';
import styled from 'styled-components';

const CreateQuestionsLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuestionContainer = styled.div`
  display: flex;
  align-items: center;
  width: 440px;
  height: 45px;
  border-radius: 10px;
  margin-bottom: 11px;
  background-color: white;

  font-family: 'DXSamgakGimbap Light';
  font-size: 15px;

  .number {
    margin-left: 25px;
    margin-right: 25px;
  }
`;

const InputContainer = styled.input`
  width: 75%;
  border: none;
  outline: none;
  font-family: 'DXSamgakGimbap Light';
  font-size: 15px;
`;

const CreateQuestions = ({ count, inputValue, setInputValue }) => {

  const handleInputChange = (index, value) => {
    const newInputValue = [...inputValue]; 
    newInputValue[index] = value; 
    setInputValue(newInputValue); 
  };

  return (
    <CreateQuestionsLayout>
      {Array.from({ length: count }, (_, idx) => (
        <QuestionContainer key={idx}>
          <div className='number'>{idx+1}번</div>
          <InputContainer 
            type='text'
            value={inputValue[idx] || ''}
            onChange={(e) => handleInputChange(idx, e.target.value)}
            placeholder='문장을 입력하세요'
          />
        </QuestionContainer>
      ))}
    </CreateQuestionsLayout>
  );
};

export default CreateQuestions;