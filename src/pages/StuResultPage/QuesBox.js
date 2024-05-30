import React from 'react';
import styled from 'styled-components';
import { Circle } from '../../assets/icons';
import markedYes from '../../assets/images/markedYes.png';
import markedNo from '../../assets/images/markedNo.png';

const ProblemCardLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: stretch;
  padding: 12px 16px;
  margin: 5px 25px;
  border-radius: 5px;
  background-color: white;
`;
const TextBox = styled.div`
  text-align: start;
  font-family: 'DXSamgakGimbap Medium';
  font-size: 16px;

  .text-answer {
    margin-bottom: 6px;
  }
`;
const AnswerBox = styled.div`
  flex-basis: 65%;
  text-align: start;
  font-family: 'DXSamgakGimbap Light';
  font-size: 16px;

  .text-answer {
    margin-bottom: 6px;
  }
`;
const CorrectWrapper = styled.div`
  background-image: ${(props) => (props.answer ? `url(${markedYes})` : `url(${markedNo})`)};
  width: 26px;
  height: 26px;
  // background-color: black;
`;

const QuesBox = ({ studentAnswer, answer, correct }) => {
  return (
    <ProblemCardLayout>
      <TextBox>
        <div className="text-answer">정답</div>
        <div className="text-student">학생 답안</div>
      </TextBox>
      <AnswerBox>
        <div className="text-answer">{studentAnswer}</div>
        <div className="text-student">{answer}</div>
      </AnswerBox>
      <CorrectWrapper answer={correct}></CorrectWrapper>
    </ProblemCardLayout>
  );
};

export default QuesBox;
