import React from 'react';
import styled from 'styled-components';
import { CounterDown, CounterUp } from '../../../assets/icons';

const CounterLayout = styled.div`
  display: flex;
  align-items: center;
`;
const Count = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const DownButton = styled.button`
  display: flex;
  border-width: 0;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;
const UpButton = styled.button`
  display: flex;
  border-width: 0;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;

const Counter = ({ count, setCount }) => {

  const downOnClick = () => {
    if (count === 1) {
      setCount(1);
    }
    else {
      setCount(count - 1);
    }
  }
  const upOnClick = () => {
    if (count === 10) {
      setCount(10);
    }
    else {
      setCount(count + 1)
    }
  }

  return (
    <CounterLayout>
      <DownButton onClick={downOnClick}>
        <img src={CounterDown} alt='down' />
      </DownButton>
      <Count>{count}</Count>
      <UpButton onClick={upOnClick}>
        <img src={CounterUp} alt='up' />
      </UpButton>
    </CounterLayout>
  );
};

export default Counter;