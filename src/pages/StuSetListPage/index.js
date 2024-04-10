import React from 'react';
import styled from 'styled-components';
import setBox from '../StuSetListPage/setBox';


const ClassListHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 24px;
`;
const ClassListTitle = styled.div`
    font-size: 24px;
    font-weight: 500;
    display: flex;
    margin: 30px;
`;
const ClassEnterPageLayout = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    position: relative;
    //align-items: center;
    background-color: rgba(74, 190, 255, 0.25);
`;

const StuSetListPage = () => {
  
    return (
        <ClassEnterPageLayout>
            {/* <ClassListHeader> */}
            {/* 클래스명 */}
            <ClassListTitle>클래스명</ClassListTitle>
            {/* </ClassListHeader> */}
        </ClassEnterPageLayout>
    );
};

export default StuSetListPage;
