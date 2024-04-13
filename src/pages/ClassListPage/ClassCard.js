import React from 'react';
import styled from 'styled-components';
import ContainedButton from '../../components/button/ContainedButton';

const ClassCardLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: stretch;
  padding: 8px 16px;
  margin: 5px 15px;
  border-radius: 14px;
  background-color: white;
`;
const ClassCardInformation = styled.div`
  .title {
    font-family: 'DXSamgakGimbap Bold';
    font-size: 18px;
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