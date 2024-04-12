import React from 'react';
import styled from 'styled-components';
import { Circle } from '../../assets/icons';

const ProblemCardLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: stretch;
  padding: 8px 16px;
  margin: 5px 25px;
  border-radius: 5px;
  background-color: lavender;
`;
const TextBox = styled.div`
  text-align: start;
  font-family: 'DXSamgakGimbap Medium';
  font-size: 16px;
`;
const AnswerBox = styled.div`
  flex-basis: 65%;
  text-align: start;
  font-family: 'DXSamgakGimbap Light';
  font-size: 16px;
`
const CorrectWrapper = styled.img`
  
`;

const ProblemCard = ({ studentAnswer, answer, correct }) => {
  return (
    <ProblemCardLayout>
      <TextBox>
        <div>정답</div>
        <div>학생 답안</div>
      </TextBox>
      <AnswerBox>
        <div>{studentAnswer}</div>
        <div>{answer}</div>
      </AnswerBox>
      <CorrectWrapper src={Circle}/>
    </ProblemCardLayout>
  );
};

export default ProblemCard;