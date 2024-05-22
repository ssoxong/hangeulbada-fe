import React from 'react';
import styled from 'styled-components';
import SetBox from './SetBox';
import { useState, useEffect } from 'react';
import { getSetListByWBId } from '../../utils/api/set';

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
  margin: 30px 0 0 30px;
  font-family: 'DXSamgakGimbap Medium';
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

const StyledBoxLayout = styled.div`
  padding: 10px;
  margin: 10px;
`;

const StuSetListPage = () => {
  const [setList, setSetList] = useState([]);

  // 학생이 속한 클래스로 세트를 조회해서 id 가져오기
  // 클래스명도 가져오기
  const workbookId = '664d9e90fb885349ac4bf8c';
  useEffect(() => {
    const fetch = async (workbookId) => {
      try {
        const res = await getSetListByWBId(workbookId);
        setSetList(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetch(workbookId);
  }, [workbookId]);

  return (
    <ClassEnterPageLayout>
      <ClassListTitle>클래스명</ClassListTitle>
      {/* <StyledSetBox> */}
      <StyledBoxLayout>
        {setList.map((data) => (
          <SetBox
            key={data.setId}
            title={data.title}
            desc={data.description}
            quesCnt={data.questionNum}
            difficulty={data.difficulty}
          />
        ))}
      </StyledBoxLayout>
      {/* </StyledSetBox> */}
    </ClassEnterPageLayout>
  );
};

export default StuSetListPage;
