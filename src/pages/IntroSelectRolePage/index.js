import React, { useState } from 'react';
import styled from 'styled-components';
import IntroPage from '../IntroPage';
import SelectRole from './SelectRole';
import ContainedButton from '../../components/button/ContainedButton';
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

const StyledButton = styled(ContainedButton)`
    background-color: red;
`;
const IntroSelectRolePage = () => {
    const [active, setActive] = useState(false);

    return (
        <IntroPageLayout>
            <IntroInputBox>
                <SelectRole active={active} setActive={setActive} />
                <StyledButton btnType="secondary" size="mid" text="확인" active={active} />
            </IntroInputBox>
        </IntroPageLayout>
    );
};

export default IntroSelectRolePage;
