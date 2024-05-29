import React, { useState } from 'react';
import styled from 'styled-components';
import { listenDone, listenInProgress, listenNotDone } from '../../assets/icons';

const StyledImgBox = styled.div`
  width: 100px;
  height: 100px;
`;

const StyledQuestBox = styled.div`
  font-family: 'DXSamgakGimbap Medium';
  // font-size: 18px;
  display: flex;
  border-radius: 10px;
  background-color: white;
  height: 50px;
  width: 80%;
  margin: 10px;
  align-items: center;
`;

const StyledBoxContent = styled.div`
  display: flex;
  height: 80px;
  width: 100%;
  margin-top: 20px;
  margin-left: 20px;
  font-size: 18px;
  text-align: center;
`;

const StyledBoxText = styled.div`
  margin: 15px 0;
`;
// num 문제 수
const QuestBox = ({ num }) => {
  const [listen, setListen] = useState('false');
  // 상태에 따라 바뀌기

  const onListenClicked = () => {
    setListen(!listen);
  };
  return (
    <div>
      <StyledQuestBox>
        <StyledBoxContent>
          <StyledBoxText>{num}번</StyledBoxText>
        </StyledBoxContent>
        <StyledBoxContent>
          <StyledBoxText>
            <StyledImgBox>
              <img src={listen ? listenNotDone : listenInProgress} alt="listenDone" onClick={onListenClicked} />
            </StyledImgBox>
          </StyledBoxText>
        </StyledBoxContent>
      </StyledQuestBox>
    </div>
  );
};

export default QuestBox;
