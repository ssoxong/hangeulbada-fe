import React from 'react';
import styled from 'styled-components';

import SetCard from './SetCard';
import ContainedButton from '../../components/button/ContainedButton';

const SetListPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  position: relative;
`;
const SetListBox = styled.div`
  margin: 10px 18px;
`
const SetListHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 24px;
`
const SetListTitle = styled.div`
  font-family: 'DXSamgakGimbap Medium';
  font-size: 24px;
`
const SetListButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 45%;
`;


const SetListPage = () => {
  const dummies = [
    {  
     title: 'title1',
     desc: 'desc1',
    },
    {  
      title: 'title2',
      desc: 'desc2',
    },
    {  
      title: 'title3',
      desc: 'desc3',
    },
    {  
     title: 'title4',
      desc: 'desc4',
    },
  ]
  return (
    <SetListPageLayout>
      <SetListBox>
        <SetListHeader>
          <SetListTitle>나의 세트</SetListTitle>
          <SetListButtonBox>
            <ContainedButton btnType="primary" size="mid" text="생성" />
            <ContainedButton btnType="secondary" size="mid" text="삭제" outline />
          </SetListButtonBox>
        </SetListHeader>
        {dummies.map((dummy) => (
          <SetCard title={dummy.title} desc={dummy.desc} />
        ))}      
      </SetListBox>
    </SetListPageLayout>
  );
};

export default SetListPage;