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
  margin: 3% 2% 0 2%;
  font-size: 18px;
  font-family: 'DXSamgakGimbap Medium';
`;

const StyledSetBoxDescript = styled.div`
  display: flex;
  margin: 2% 2%;
  font-family: 'DXSamgakGimbap Light';
  font-size: 14px;
`;

const StyledSetOptions = styled.div`
  display: flex;
  margin: 1% 2%;
  font-family: 'DXSamgakGimbap Light';
  font-size: 16px;
`;

const StyledButton = styled.div`
  padding: 10px;
`;

const SetBox = ({ title, desc, quesCnt, difficulty }) => {
  const onTestClicked = () => {
    window.location.href = '/testPage';
  };

  SetBox.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    quesCnt: PropTypes.string.isRequired,
    deadline: PropTypes.string.isRequired,
  };
  return (
    <StyledSetBox>
      <StyledSetBoxTitle>
        {title}
        <StyledSetBoxDescript>{desc}</StyledSetBoxDescript>
      </StyledSetBoxTitle>

      <StyledSetOptions>문제 수&nbsp;&nbsp;&nbsp;{quesCnt}</StyledSetOptions>
      <StyledSetOptions>난이도&nbsp;&nbsp;&nbsp;&nbsp;{difficulty}</StyledSetOptions>
      <StyledButton>
        <ContainedButton
          btnType="primary"
          size="large"
          text="받아쓰기 시작하기"
          onClick={onTestClicked}
        ></ContainedButton>
      </StyledButton>
    </StyledSetBox>
  );
};
export default SetBox;
