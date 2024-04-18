import React, { useState } from 'react';
import styled from 'styled-components';
import { listenDone, listenInProgress, listenNotDone } from '../../assets/icons';

const StyledImgBox = styled.div`
    width: 100px;
    height: 100px;
`;

const StyledQuestBox = styled.div`
    display: flex;
    border-radius: 20px;
    background-color: white;
    height: 100px;
    width: 100%;
    margin: 10px;
    align-items: center;
`;

const StyledBoxContent = styled.div`
    height: 80px;
    width: 80px;
    margin: 0px;
    font-size: 28px;
    text-align: center;
`;

const StyledBoxText = styled.div`
    margin: 15px 0;
`;
// num 문제 수
const QuestBox = ({ num }) => {
    const [listen, setListen] = useState('false');
    // 상태에 따라 바뀌기

    return (
        <div>
            <StyledQuestBox>
                <StyledBoxContent>
                    <StyledBoxText>{num}번</StyledBoxText>
                </StyledBoxContent>
                <StyledBoxContent>
                    <StyledBoxText>
                        <StyledImgBox>
                            <img src={listenNotDone} alt="listenDone" />
                        </StyledImgBox>
                    </StyledBoxText>
                </StyledBoxContent>
            </StyledQuestBox>
        </div>
    );
};

export default QuestBox;
