import React from 'react';
import styled from 'styled-components';
import TestPaper from './TestPaper';
import ProblemCard from '../SetPage/ProblemCard';
import QuesBox from '../StuResultPage/QuesBox';
import ContainedButton from '../../components/button/ContainedButton';

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

    &:nth-child(2) {
        margin: 0 0 0 30px;
        font-size: 20px;
    }
`;
const ScoreBox = styled.div`
    display: flex;
    align-items: center;
    .text {
        font-family: 'DXSamgakGimbap Medium';
        font-size: 20px;
        margin-right: 8px;
        background-color: transparent;
    }
    .score {
        font-family: 'DXSamgakGimbap Medium';
        font-size: 24px;
        width: 62px;
        height: 57px;
        line-height: 57px;
        border-radius: 5px;
        background-color: white;
    }
`;

const StyledButtonAlign = styled.div`
    display: flex;
    padding: 10px 30px;

    }
`;
const StyledScore = styled(ScoreBox)`
    padding: 0 180px;
`;
const ShowPastTestPage = () => {
    const dummies = [
        {
            studentAnswer: 'studentAnswer1',
            answer: 'answer1',
            correct: 'correct1',
        },
        {
            studentAnswer: 'studentAnswer2',
            answer: 'answer2',
            correct: 'correct2',
        },
        {
            studentAnswer: 'studentAnswer3',
            answer: 'answer3',
            correct: 'correct3',
        },
        {
            studentAnswer: 'studentAnswer4',
            answer: 'answer4',
            correct: 'correct4',
        },
    ];

    return (
        <MyPageLayout>
            <MyPageTitle>지난 시험지 보기</MyPageTitle>
            <MyPageTitle>날짜</MyPageTitle>
            <TestPaper />
            <StyledButtonAlign>
                <ContainedButton btnType="primary" size="large" text="제출한 시험지 보기"></ContainedButton>
                <StyledScore>
                    <div className="text">총점</div>
                    <div className="score">80</div>
                </StyledScore>
            </StyledButtonAlign>
            {dummies.map((dummy, index) => (
                <QuesBox
                    studentAnswer={dummy.studentAnswer}
                    answer={dummy.answer}
                    correct={dummy.correct}
                    key={index}
                />
            ))}
        </MyPageLayout>
    );
};
export default ShowPastTestPage;
