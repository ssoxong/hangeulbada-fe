import React from 'react';
import styled from 'styled-components';

import SetCard from './SetCard';
import { CopyButtonIcon } from '../../assets/icons';
import ContainedButton from '../../components/button/ContainedButton';
import Dropdown from '../../components/button/Dropdown';

const ClassPageLayout = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    position: relative;
`;
const ClassHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 24px;
    font-family: 'DXSamgakGimbap Medium';
    font-size: 24px;
    .title {
        text-align: start;
    }
`;
const ClassTitleBox = styled.div`
    display: flex;
    margin-right: 50px;
    width: 100%;
`;
const CopyButton = styled.button`
    display: flex;
    border-width: 0;
    background-color: transparent;

    &:hover {
        cursor: pointer;
    }
`;
const HeaderButtonBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const SetColums = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px;
    margin: 2px 15px;
    border-radius: 14px;
    background-color: transparent;
    font-family: 'DXSamgakGimbap Light';
    font-size: 15px;

    .item-no {
        flex-basis: 7%;
    }
    .item-name {
        flex-basis: 15%;
    }
    .item-set {
        flex-basis: 20%;
    }
    .item-score {
        white-space: pre-line;
        flex-basis: 20%;
    }
    .item-blank {
        white-space: pre-line;
        flex-basis: 5%;
    }
`;

const ClassPage = () => {
    const dummies = [
        {
            no: '1',
            name: 'name1',
            set: 'set1',
            score: 'score1',
        },
        {
            no: '2',
            name: 'name2',
            set: 'set2',
            score: 'score2',
        },
        {
            no: '3',
            name: 'name3',
            set: 'set3',
            score: 'score3',
        },
        {
            no: '4',
            name: 'name4',
            set: 'set4',
            score: 'score4',
        },
    ];
    const items = [
        { text: '이름순', link: '#' },
        { text: '성적순', link: '#' },
    ];
    return (
        <ClassPageLayout>
            <ClassHeader>
                <ClassTitleBox>
                    <div className="title">클래스 1 {/*클래스 명*/}</div>
                    <CopyButton>
                        <img src={CopyButtonIcon} alt="copy" />
                    </CopyButton>
                </ClassTitleBox>
                <HeaderButtonBox>
                    <ContainedButton btnType="primary" size="large" text="이 클래스 세트 보기" />

                    <Dropdown text="정렬 옵션" items={items} />
                </HeaderButtonBox>
            </ClassHeader>
            <SetColums>
                <div className="item-no">순</div>
                <div className="item-name">이름</div>
                <div className="item-set">마지막으로{'\n'}푼 세트</div>
                <div className="item-score">마지막{'\n'}세트 점수</div>
                <div className="item-blank"></div>
            </SetColums>
            {dummies.map((dummy) => (
                <SetCard key={dummy.no} no={dummy.no} name={dummy.name} set={dummy.set} score={dummy.score} />
            ))}
        </ClassPageLayout>
    );
};

export default ClassPage;
