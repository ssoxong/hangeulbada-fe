import React from 'react';
import styled from 'styled-components';

import ProblemCard from './ProblemCard';
import ContainedButton from '../../components/button/ContainedButton';
import { StarIcon } from '../../assets/icons';

const SetPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  position: relative;
`;
const SetHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px;
  font-size: 24px;
`;
const SetInformation = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;

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
const HeaderButtonBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const SetPage = () => {
  const dummies = [
    {  
     idx: '1번',
     text: 'text1',
     sound: 'sound1',
    },
    {  
      idx: '2번',
      text: 'text2',
      sound: 'sound2',
    },
    {  
      idx: '3번',
      text: 'text3',
      sound: 'sound3',
    },
    {  
      idx: '4번',
      text: 'text4',
      sound: 'sound4',
    },
  ]
  return (
    <SetPageLayout>
      <SetHeader>
        <SetInformation>
          <div className='title'>세트 1 {/*세트 명*/}</div>
          <div className='description'>세트1에 대한 설명입니다.</div>
          <div className='count'>문제 수 8 {/*문제 수*/}</div>
          <div className='difficulty'>
            난이도
            <img src={StarIcon} alt={'star'} />
          </div>
        </SetInformation>
        <HeaderButtonBox>
          <ContainedButton btnType="primary" size="mid" text="문장 추가" />
          <ContainedButton btnType="secondary" size="mid" text="문장 삭제" />
        </HeaderButtonBox>
      </SetHeader>
      {dummies.map((dummy) => (
          <ProblemCard idx={dummy.idx} text={dummy.text} sound={dummy.sound} />
      ))}
    </SetPageLayout>
  );
};

export default SetPage;