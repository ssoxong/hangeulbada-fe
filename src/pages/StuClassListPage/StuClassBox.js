import React from 'react';
import styled from 'styled-components';
import { RemoveIcon } from '../../assets/icons';
import { removeStuClass } from '../../utils/api/student';

const ClassCardLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  margin: 12px 15px;
  border-radius: 14px;
  background-color: white;
`;

const ClassCardInformation = styled.div`
  padding: 8px 12px;
  .title {
    font-family: 'DXSamgakGimbap Bold';
    font-size: 18px;
    margin-bottom: 3px;
  }
  .desc {
    font-family: 'DXSamgakGimbap Light';
    font-size: 16px;
  }

  &:hover {
    cursor: 
  }
`;

const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  border-width: 0;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;

const StuClassBox = ({ id, title, desc, isRemove, classList, setClassList }) => {
  const removeOnClick = () => {
    const requestRemove = async (groupId) => {
      await removeStuClass(groupId).then((res) => {
        const filtered = classList.filter((value, idx, arr) => {
          return value.id !== groupId;
        });
        setClassList(filtered);
        console.log(classList);
      });
    };
    requestRemove(id);
  };

  return (
    <div>
      <ClassCardLayout>
        <ClassCardInformation>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </ClassCardInformation>
        {isRemove && (
          <RemoveButton onClick={removeOnClick}>
            <img src={RemoveIcon} alt="removeIconImg" />
          </RemoveButton>
        )}
      </ClassCardLayout>
    </div>
  );
};

export default StuClassBox;
