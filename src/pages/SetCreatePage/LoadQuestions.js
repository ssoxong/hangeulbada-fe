import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAllQuestions } from '../../utils/api/question';
import CheckButton from '../../components/button/CheckButton';

const LoadQuestionsLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  margin-left: 32px;
  margin-right: 32px;
  
  border-radius: 10px;
  background-color: rgba(18, 127, 255, 0.1);

  overflow: auto;
`;

const QuestionCardLayout = styled.div`
  display: flex;
  align-items: center;
  width: 375px;
  height: 40px;
  border-radius: 10px;
  margin-bottom: 11px;
  background-color: white;

  font-family: 'DXSamgakGimbap Light';
  font-size: 15px;

  .card-index {
    width: 15%;
  }
`;

const QuestionCard = ({ idx, content, onChange }) => {

  return (
    <QuestionCardLayout>
      <div className='card-index'>{idx}번</div>
      <div className='card-content'>{content}</div>
      <CheckButton onChange={onChange}/>
    </QuestionCardLayout>
  )
}

const LoadQuestions = ({ inputValue, setInputValue }) => {
  const initialState = [
    {
      id: '',
      content: ' ',
    }
  ]
  const [questions, setQuestions] = useState(initialState);

  useEffect(() => {
    const getQuestions = async () => {
      await getAllQuestions()
        .then(res => {
          console.log(res);
          setQuestions(res);
        })
    }
    getQuestions();
  }, [])
  
  const handleCheckboxChange = (content) => {
    let newInputValue;
    if (inputValue.includes(content)) {
      newInputValue = inputValue.filter(item => item !== content);
    }
    else { 
      newInputValue = [...inputValue, content];
    }
    setInputValue(newInputValue); 
    console.log(inputValue)
  };

  return (
    <LoadQuestionsLayout>
      {questions.map((question, idx) => (
        <QuestionCard 
          key={idx} 
          idx={idx+1}
          content={question.content}
          onChange={e => handleCheckboxChange(question.content)}
        />
      ))}
    </LoadQuestionsLayout>
  );
};

export default LoadQuestions;