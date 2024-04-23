import { defaultFormat } from 'moment';
import React from 'react';
import styled from 'styled-components';
import { StarIcon } from '../../assets/icons';
import ProblemCard from '../SetPage/ProblemCard';

const SetInformation = styled.div`
    display: flex;
    flex-direction: column;
    text-align: start;
    padding: 16px;
    margin: 24px;
    border-radius: 10px;
    font-size: 24px;
    background-color: rgba(18, 127, 255, 0.27);

    .title {
        font-family: 'DXSamgakGimbap Medium';
        font-size: 24px;
    }
    .description {
        font-family: 'DXSamgakGimbap Light';
        font-size: 16px;
    }
    .count {
        font-family: 'DXSamgakGimbap Light';
        font-size: 16px;
    }
    .difficulty {
        font-family: 'DXSamgakGimbap Light';
        font-size: 16px;
    }
`;
const TestPaper = () => {
    return (
        <div>
            <SetInformation>
                <div className="title">세트명 {/*세트 명*/}</div>
                <div className="description">세트에 대한 설명</div>
                <div className="count">문제 수 {/*문제 수*/}</div>
                <div className="difficulty">
                    난이도 <img src={StarIcon} alt={'star'} />
                </div>
            </SetInformation>
        </div>
    );
};

export default TestPaper;
