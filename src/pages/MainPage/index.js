import React from 'react';
import styled from 'styled-components';

const MainPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  position: relative;
  align-items: center;
`;

const MainPage = () => {
    return (
        <MainPageLayout>
          Main Page
        </MainPageLayout>
    );
};

export default MainPage;