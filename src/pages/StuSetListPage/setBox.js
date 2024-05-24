import React from 'react';
import styled from 'styled-components';
import ContainedButton from '../../components/button/ContainedButton';
import PropTypes from 'prop-types';

const StyledSetTitle = styled.div`
  width: 100px;
  height: 100px;
  background-color: white;
`;
const StyledSetBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  background-color: white;
  margin: 20px;
  border-radius: 10px;
  padding: 10px;
`;

const StyledSetBoxTitle = styled.div`
  display: flex;
  margin: 2% 5% 0 5%;
  font-size: 20px;
`;

const StyledSetBoxDescript = styled.div`
  display: flex;
  margin: 2% 5%;
`;

const StyledSetOptions = styled.div`
  display: flex;
  margin: 0% 5%;
`;

const StyledButton = styled.div`
  padding: 10px;
`;
const SetBox = ({ title, desc, quesCnt, deadline }) => {
  SetBox.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    quesCnt: PropTypes.string.isRequired,
    deadline: PropTypes.string.isRequired,
  };
  return (
    <StyledSetBox>
      <StyledSetBoxTitle>{title}</StyledSetBoxTitle>
      <StyledSetBoxDescript>{desc}</StyledSetBoxDescript>
      <StyledSetOptions>문제 수 {quesCnt}</StyledSetOptions>
      <StyledSetOptions>마감일 {deadline}</StyledSetOptions>
      <StyledButton>
        <ContainedButton btnType="primary" size="large" text="받아쓰기 시작하기"></ContainedButton>
      </StyledButton>
    </StyledSetBox>
  );
};
export default SetBox;
