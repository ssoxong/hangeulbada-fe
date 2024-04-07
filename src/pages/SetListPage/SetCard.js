import React from 'react';
import styled from 'styled-components';

const SetCardLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: stretch;
  padding: 8px 16px;
  margin: 5px 15px;
  border-radius: 14px;
  background-color: lavender;

  &:hover {
    cursor: pointer;
  }
`;
const SetCardInformation = styled.div`
  
`

const SetCard = ({title, desc, onClick }) => {
  return (
    <SetCardLayout onClick={onClick}>
      <SetCardInformation>
        <div>{title}</div>
        <div>{desc}</div>
      </SetCardInformation>
    </SetCardLayout>
  );
};

export default SetCard;