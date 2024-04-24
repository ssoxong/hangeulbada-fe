import React from 'react';
import styled from 'styled-components';
import IntroPage from '../IntroPage';
import SelectRole from './SelectRole';

const IntroPageLayout = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    position: relative;
    align-items: center;
`;

const IntroInputBox = styled.div`
    margin: 70%;
    height: 300px;
    width: 100%;
    // background-color: red;
`;

const IntroSelectRolePage = () => {
    return (
        <IntroPageLayout>
            <IntroInputBox>
                <SelectRole />
            </IntroInputBox>
        </IntroPageLayout>
    );
};

export default IntroSelectRolePage;
