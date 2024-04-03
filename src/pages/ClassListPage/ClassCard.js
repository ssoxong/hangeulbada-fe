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
  background-color: lavender;
`;
const ClassCardInformation = styled.div`
  
`

const ClassCard = ({title, desc, code}) => {
  return (
    <ClassCardLayout>
      <ClassCardInformation>
        <div>{title}</div>
        <div>{desc}</div>
      </ClassCardInformation>
      <ContainedButton
        btnType="tertialy"
        size="large"
        text={code}
      >
        {code}
      </ContainedButton>
    </ClassCardLayout>
  );
};

export default ClassCard;