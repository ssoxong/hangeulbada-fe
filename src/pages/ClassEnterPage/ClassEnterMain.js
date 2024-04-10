import React from 'react';
import styled from 'styled-components';

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
`;

const ClassEnterMain = () => {
    return (
        <>
            <ClassListHeader>
                <ClassListTitle>나의 클래스</ClassListTitle>
            </ClassListHeader>
        </>
    );
};

export default ClassEnterMain;
