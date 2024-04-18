import React from 'react';
import styled from 'styled-components';

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
    margin: 30px 0 30px 30px;
`;
const MyPage = () => {
    return (
        <MyPageLayout>
            <MyPageTitle>나의 달력</MyPageTitle>
            <MyPageTitle></MyPageTitle>
        </MyPageLayout>
    );
};

export default MyPage;
