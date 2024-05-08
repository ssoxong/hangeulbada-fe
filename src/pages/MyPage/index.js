import React from 'react';
import styled from 'styled-components';
import MyCalendar from './MyCalendar';

const MyPageLayout = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    position: relative;
`;
const MyPageTitle = styled.div`
    font-size: 24px;
    font-weight: 500;
    display: flex;
    margin: 30px 0 10px 30px;
`;

const StyledCalendar = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 0 0 50px;
`;
const MyPage = () => {
    return (
        <MyPageLayout>
            <MyPageTitle>나의 달력</MyPageTitle>
            {/* <MyPageTitle></MyPageTitle> */}
            <StyledCalendar>
                <MyCalendar />

            </StyledCalendar>
        </MyPageLayout>
    );
};

export default MyPage;
