import React, { useState } from 'react';
import styled from 'styled-components';
import ProblemCard from './ProblemCard';
import { StarIcon } from '../../assets/icons';
import ContainedButton from '../../components/button/ContainedButton';
import BlurModal from '../../components/modal/BlurModal';

const SetResultPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  position: relative;
`;

const SetInformation = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  padding: 16px;
  margin: 24px;
  border-radius: 10px;
  font-size: 24px;
  background-color: rgba(18, 127, 255, 0.27);

  .title {
    font-family: 'DXSamgakGimbap Medium';
    font-size: 24px;
  }
  .description {
    font-family: 'DXSamgakGimbap Light';
    font-size : 16px;
  }
  .count {
    font-family: 'DXSamgakGimbap Light';
    font-size : 16px;
  }
  .difficulty {
     font-family: 'DXSamgakGimbap Light';
     font-size : 16px;
  }
`;
const SetHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 24px;
  margin-left: 24px;
  margin-bottom: 12px;
`;
const NameAndButtonBox = styled.div`
  .name {
    text-align: start;
    margin-bottom: 12px;
    font-family: 'DXSamgakGimbap Bold';
    font-size: 24px;
  }
`;
const ScoreBox = styled.div`
  display: flex; 
  align-items: center;
  .text {
    font-family: 'DXSamgakGimbap Medium';
    font-size: 20px;
    margin-right: 8px;
    background-color: transparent;
  }
  .score {
    font-family: 'DXSamgakGimbap Medium';
    font-size: 24px;
    width: 62px;
    height: 57px;
    line-height: 57px;
    border-radius: 5px;
    background-color: white;
  }
`;

const SetResultPage = () => {
  const [openImage, setOpenImage] = useState(false);

  const dummies = [
    {  
     studentAnswer: 'studentAnswer1',
     answer: 'answer1',
     correct: 'correct1',
    },
    {  
      studentAnswer: 'studentAnswer2',
      answer: 'answer2',
      correct: 'correct2',
    },
    {  
      studentAnswer: 'studentAnswer3',
      answer: 'answer3',
      correct: 'correct3',
    },
    {  
     studentAnswer: 'studentAnswer4',
      answer: 'answer4',
      correct: 'correct4',
    },
  ]
  const imageOnClick = () => {
    setOpenImage(true);
  };
  const closeOnClick = () => {
    setOpenImage(false);
  }
  return (
    <>
      {openImage && (
        <BlurModal
          innerDatas={
            <>
              <div onClick={closeOnClick}>
                image
              </div>
            </>
          }
        />
      )}
      <SetResultPageLayout>
        <SetInformation>
          <div className='title'>세트명 {/*세트 명*/}</div>
          <div className='description'>세트에 대한 설명</div>
          <div className='count'>문제 수  {/*문제 수*/}</div>
          <div className='difficulty'>
            난이도{' '}
            <img src={StarIcon} alt={'star'} />
          </div>
        </SetInformation>
        <SetHeader>
          <NameAndButtonBox>
            <div className='name'>학생 명</div>
            <ContainedButton 
              btnType="primary" 
              size="large" 
              text="제출한 이미지 보기"
              onClick={imageOnClick}
            />
          </NameAndButtonBox>
          <ScoreBox>
            <div className='text'>총점</div>
            <div className='score'>80</div>
          </ScoreBox>
        </SetHeader>
        {dummies.map((dummy, index) => (
          <ProblemCard 
            studentAnswer={dummy.studentAnswer} 
            answer={dummy.answer} 
            correct={dummy.correct} 
            key={index}
          />
        ))}      
      </SetResultPageLayout>
    </>
  );
};

export default SetResultPage;