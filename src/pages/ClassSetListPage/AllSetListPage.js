import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { addSetToClass, getSetList } from '../../utils/api/set';
import ContainedButton from '../../components/button/ContainedButton';
import SetCard from './SetCard';

const AllSetListPageLayout = styled.div`
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
  flex-direction: column;
  margin-right: 50px;
  width: 100%;
  text-align: start;

  .title {
    margin-bottom: 7px;
  }
  .guide {
    font-family: 'DXSamgakGimbap Light';
    font-size: 14px;
  }
`;

const AllSetListPage = ({ classData, setIsAddClicked }) => {

  const [setList, setSetList] = useState([]);
  const [inputValue, setInputValue] = useState([]);
  const [btnDisable, setBtnDisable] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      await getSetList()
        .then((res) => {
          setSetList(res.data);
        })
    }

    fetch();
  }, [])

  useEffect(() => {
    if (inputValue.length === 0) {
      setBtnDisable(true);
    }
    else {
      setBtnDisable(false);
    }
  }, [inputValue])

  const handleCheckboxChange = (id) => {
    let newInputValue;
    if (inputValue.includes(id)) {
      newInputValue = inputValue.filter(item => item !== id);
    }
    else { 
      newInputValue = [...inputValue, id];
    }
    setInputValue(newInputValue); 
  };

  const addOnClick = () => {
    const addSetList = async() => {
      await addSetToClass(classData.id, inputValue)
        .then(res => {
          window.location.reload();
        })
    }
    addSetList();
  }

  return (
    <AllSetListPageLayout>
      <ClassHeader>
        <ClassTitleBox>
          <div className="title">{classData.groupName}에 세트 추가</div>
          <div className="guide">추가할 세트를 선택하세요.</div>
        </ClassTitleBox>
        <ContainedButton
          btnType="primary"
          size="mid"
          text="추가"
          onClick={addOnClick}
          disabled={btnDisable}
        />
      </ClassHeader>
      {setList.map((set) => (
        <SetCard 
          key={set.id} 
          id={set.id}
          title={set.title} 
          desc={set.description} 
          isAdd
          onChange={e => handleCheckboxChange(set.id)}
        />
      ))}
    </AllSetListPageLayout>
  );
};

export default AllSetListPage;