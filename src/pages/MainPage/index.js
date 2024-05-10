import React from 'react';
import styled from 'styled-components';
import { useOAuthState } from '../../utils/store/useLoginStore';
import TeacherMain from './TeacherMain';
import StuClassList from '../StuClassListPage';
const MainPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  position: relative;
  align-items: center;
`;

const MainPage = () => {
  const { cid, name, email, role } = useOAuthState();

  return <MainPageLayout>{role === 'teacher' ? <TeacherMain></TeacherMain> : <StuClassList />}</MainPageLayout>;
};

export default MainPage;
