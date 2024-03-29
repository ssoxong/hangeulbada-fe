import React from 'react';
import styled from 'styled-components';

const IntroPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  position: relative;
  align-items: center;
`;

const IntroPage = () => {
    return (
      <IntroPageLayout>
        Intro Page
      </IntroPageLayout>
    );
};

export default IntroPage;