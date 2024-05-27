import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BlurModal from '../../components/modal/BlurModal';
import { getClass, getClassSetList } from '../../utils/api/class';
import { useParams } from 'react-router-dom';
import ContainedButton from '../../components/button/ContainedButton';
import SetCard from './SetCard';
import AllSetListPage from './AllSetListPage';

const ClassSetListPageLayout = styled.div`
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
`;
const ClassTitleBox = styled.div`
  display: flex;
  margin-right: 50px;
  width: 100%;

  .title {
    text-align: start;
  }
`;
const HeaderButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ClassSetListPage = () => {
  const { id } = useParams();

  const classInitialState = {
    groupName: '',
  }

  const [isRemoveClicked, setIsRemoveClicked] = useState(false);
  const [isAddClicked, setIsAddClicked] = useState(false);
  const [setList, setSetList] = useState([]);
  const [classData, setClassData] = useState(classInitialState);

  useEffect(() => {
    const fetch = async () => {
      await getClassSetList(id)
        .then((res) => {
          setSetList(res.data);
        })
      await getClass(id)
      .then((res) => {
        setClassData(res.data);
      })
    }
    fetch();
  }, [])

  return (
    <>
      {isRemoveClicked && (
        <BlurModal
          innerDatas={
            <>
              {setList.map((set) => (
                <SetCard 
                  key={set.id} 
                  id={set.id}
                  classId={id}
                  title={set.title} 
                  desc={set.description} 
                  setList={setList}
                  setSetList={setSetList}
                  isRemove 
                />
              ))}
              <ContainedButton 
                btnType="primary" 
                size="mid" 
                text="완료" 
                onClick={() => setIsRemoveClicked(false)}
              />
            </>
          }
        />
      )}
      {isAddClicked ? (
        <AllSetListPage 
          classData={classData} 
          setIsAddClicked={setIsAddClicked}
        />
      ) : (
        <ClassSetListPageLayout>
          <ClassHeader>
            <ClassTitleBox>
              <div className="title">{classData.groupName}의 세트</div>
            </ClassTitleBox>
            <HeaderButtonBox>
              <ContainedButton
                btnType="primary"
                size="large"
                text="클레스에 세트 추가"
                onClick={() => setIsAddClicked(true)}
              />
              <ContainedButton
                btnType="secondary"
                size="large"
                text="클레스의 세트 삭제"
                onClick={() => setIsRemoveClicked(true)}
              />
            </HeaderButtonBox>
          </ClassHeader>
          {setList.map((set) => (
            <SetCard 
              key={set.id} 
              id={set.id}
              title={set.title} 
              desc={set.description} 
            />
          ))}
        </ClassSetListPageLayout>
      )}
    </>
  );
};

export default ClassSetListPage;