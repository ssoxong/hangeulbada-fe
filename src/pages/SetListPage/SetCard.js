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
  .title {
    font-family: 'DXSamgakGimbap Bold';
    font-size: 18px;
  }
  .desc {
    font-family: 'DXSamgakGimbap Light';
    font-size: 16px;
  }
`

const SetCard = ({title, desc, onClick }) => {
  return (
    <SetCardLayout onClick={onClick}>
      <SetCardInformation>
        <div className='title'>{title}</div>
        <div className='desc'>{desc}</div>
      </SetCardInformation>
    </SetCardLayout>
  );
};

export default SetCard;