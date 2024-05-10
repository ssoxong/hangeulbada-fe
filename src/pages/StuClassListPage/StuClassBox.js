import React from 'react';
import styled from 'styled-components';
import { RemoveIcon } from '../../assets/icons';

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

const StuClassBox = ({title, desc, isRemove}) => {
  return (
    <div>
      <ClassCardLayout>
        <ClassCardInformation>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </ClassCardInformation>
        {isRemove(
          <RemoveButton>
            <img src={RemoveIcon} alt="removeIconImg" />
          </RemoveButton>
        )}
      </ClassCardLayout>
    </div>
  );
};

export default StuClassBox;
