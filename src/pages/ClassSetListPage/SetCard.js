import React from 'react';
import styled from 'styled-components';
import { RemoveIcon } from '../../assets/icons';
import { removeClassSet } from '../../utils/api/class';
import CheckButton from '../../components/button/CheckButton';

const SetCardLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 22px;
  margin: 6px 15px;
  border-radius: 14px;
  background-color: white;

  &:hover {
    cursor: pointer;
  }
`;
const SetCardInformation = styled.div`
  text-align: start;
  .title {
    font-family: 'DXSamgakGimbap Bold';
    font-size: 18px;
    margin-bottom: 3px;
  }
  .desc {
    font-family: 'DXSamgakGimbap Light';
    font-size: 16px;
  }
`
const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  border-width: 0;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;

const SetCard = ({ 
  id,
  classId,
  title, 
  desc,
  setList, 
  setSetList,
  isRemove,
  isAdd,
  onChange
}) => {

  const removeOnClick = () => {
    const requestRemove = async (workbookId) => {
     await removeClassSet(classId, workbookId)
       .then((res) => {
         const filtered = setList.filter((value, idx, arr) => {
           return value.id !== workbookId;
         })
         setSetList(filtered);
       })
    }
    requestRemove(id);
  }

  const setOnClick = () => {
    window.location.href = `/set/${id}`;
  }

  return (
    <SetCardLayout>
      <SetCardInformation onClick={setOnClick}>
        <div className='title'>{title}</div>
        <div className='desc'>{desc}</div>
      </SetCardInformation>
      {isRemove && (
        <RemoveButton onClick={removeOnClick}>
          <img src={RemoveIcon} alt="remove" />
        </RemoveButton>
      )}
      {isAdd && (
        <CheckButton onChange={onChange} />
      )}
    </SetCardLayout>
  );
};

export default SetCard;