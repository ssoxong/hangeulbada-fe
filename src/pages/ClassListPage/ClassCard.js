import React from 'react';
import styled from 'styled-components';
import ContainedButton from '../../components/button/ContainedButton';

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
`

const ClassCard = ({title, desc, code}) => {
  return (
    <ClassCardLayout>
      <ClassCardInformation>
        <div className='title'>{title}</div>
        <div className='desc'>{desc}</div>
      </ClassCardInformation>
      <ContainedButton
        btnType="tertialy"
        size="mid"
        text={code}
      >
        {code}
      </ContainedButton>
    </ClassCardLayout>
  );
};

export default ClassCard;