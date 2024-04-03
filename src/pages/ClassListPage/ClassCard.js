import React from 'react';
import styled from 'styled-components';

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
const ClassCardCodeBtn = styled.button`
  border: none;
  border-radius: 10px;
  background-color: yellow;
`

const ClassCard = ({title, desc, code}) => {
  return (
    <ClassCardLayout>
      <ClassCardInformation>
        <div>{title}</div>
        <div>{desc}</div>
      </ClassCardInformation>
      <ClassCardCodeBtn>
        {code}
      </ClassCardCodeBtn>
    </ClassCardLayout>
  );
};

export default ClassCard;