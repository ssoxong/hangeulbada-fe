import React, { useState } from 'react';
import styled from 'styled-components';
import QuestBox from './QuestBox';
import ContainedButton from '../../components/button/ContainedButton';
import { ImgSubmit } from '..';
import { useLocation, useNavigate } from 'react-router-dom';

import UploadButton from '../../components/button/UploadButton';
import { useOAuthState } from '../../utils/store/useLoginStore';

const SetListPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  position: relative;
`;
const ClassListTitle = styled.div`
  font-family: 'DXSamgakGimbap Bold';
  font-size: 24px;
  font-weight: 500;
  display: flex;
  margin: 30px 0 20px 30px;
`;

const StyledWarningText = styled.div`
  font-family: 'DXSamgakGimbap Light';
  padding: 10px;
  color: red;
  font-size: 14px;
`;

const StyledQuestLayout = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledQuestCol = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 0 70px 10px 30px;

  &:nth-child(1) {
    padding: 0 0 0 40px;
  }
`;

const StyledBtnSection = styled.div`
  padding: 10px;
  padding-left: 70px;
  padding-bottom: 20px;
`;

const TestPage = () => {
  const location = useLocation();
  const { workbookId, title, quesCnt } = location.state || {};
  const { cid } = useOAuthState();
  // console.log('cid', cid);
  // console.log('wbId', workbookId);
  // console.log('title: ', title);
  // console.log('quesCnt', quesCnt);

  return (
    <div>
      <SetListPageLayout>
        <ClassListTitle>{title}</ClassListTitle>
        <StyledWarningText>반드시 문제 앞에 번호를 써 주세요.</StyledWarningText>
        <StyledQuestLayout>
          <StyledQuestCol>
            {Array.from({ length: quesCnt }, (_, index) => (
              <QuestBox key={index} num={index + 1} />
            ))}
          </StyledQuestCol>
        </StyledQuestLayout>
        <StyledBtnSection>
          <UploadButton studentId={cid} workbookId={workbookId}></UploadButton>
          {/* {userImg && <img src={userImg} alt="userPaper" />} */}
        </StyledBtnSection>
      </SetListPageLayout>
    </div>
  );
};

export default TestPage;
