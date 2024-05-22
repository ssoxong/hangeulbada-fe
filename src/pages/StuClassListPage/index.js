import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import StuClassBox from './StuClassBox';
// import { getClassList } from '../../utils/api/class';
import ContainedButton from '../../components/button/ContainedButton';
import BlurModal from '../../components/modal/BlurModal';
import { getStuClass } from '../../utils/api/student';

const SetListPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  position: relative;
`;

const ClassListTitle = styled.div`
  font-family: 'DXSamgakGimbap Bold';
  font-size: 24px;
  font-weight: 500;
  display: flex;
  margin: 30px 0 30px 30px;
`;
const ClassListButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 45%;
  margin: 0 0 0 50%;
`;

const StuClassList = () => {
  const [isRemoveClicked, setIsRemoveClicked] = useState(false);
  const [classList, setClassList] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      await getStuClass().then((res) => {
        setClassList(res.data);
      });
    };
    fetch();
  }, []);

  const createOnClick = () => {
    window.location.href = '/classEnter';
  };

  const removeOnClick = () => {
    setIsRemoveClicked(true);
  };

  const submitOnClick = () => {
    setIsRemoveClicked(false);
  };

  return (
    <SetListPageLayout>
      {isRemoveClicked && (
        <BlurModal
          innerDatas={
            <>
              {classList.map((element) => (
                <StuClassBox
                  key={element.id}
                  id={element.id}
                  title={element.groupName}
                  desc={element.desc}
                  code={element.groupCode}
                  isRemove
                  classList={classList}
                  setClassList={setClassList}
                />
              ))}
              <ContainedButton btnType="primary" size="mid" text="완료" onClick={submitOnClick} />
            </>
          }
        />
      )}
      <ClassListTitle>나의 클래스</ClassListTitle>
      <ClassListButtonBox>
        <ContainedButton btnType="primary" size="mid" text="생성" onClick={createOnClick} />
        <ContainedButton btnType="secondary" size="mid" text="삭제" onClick={removeOnClick} />
      </ClassListButtonBox>
      {classList.map((element) => (
        <StuClassBox key={element.id} title={element.groupName} desc={element.desc}></StuClassBox>
      ))}
    </SetListPageLayout>
  );
};

export default StuClassList;
