import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import ContainedButton from '../../components/button/ContainedButton';
import { enterClass } from '../../utils/api/student';
const ClassEnterPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  position: relative;
  //align-items: center;
  background-color: rgba(74, 190, 255, 0.25);
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const SyltedInput = styled.input`
  // background-color: yellow;
  border-radius: 20px;
  border-width: 0px;
  width: 60%;
  height: 50px;
  padding: 20px;
  font-size: 16px;
  font-family: 'DXSamgakGimbap Light';
`;

const StyledLabel = styled.label`
  padding: 30px;
`;

// const StyledDone = styled(ContainedButton)`
//   appearance: none;
//   background-color:
// // 값이 들어오면 파란색
//     ${(props) => props.inputcheck};
//   width: 150px;
//   height: 60px;
//   border-radius: 10px;
//   border-color: white;
//   margin: 180px;
//   font-size: 20px;
//   color: ${(props) => props.fontcolor};
// `;

// const StyledDone = styled(ContainedButton)`
//   display: flex;
//   padding: 200px;
// `;

const StyledBtn = styled.div``;

const ClassEnterPage = () => {
  const [groupCode, setGroupCode] = useState('');
  const [inputcheck, setInputcheck] = useState('white');
  const [fontcolor, setfontcolor] = useState('black');

  const requestEnter = async (groupCode) => {
    await enterClass(groupCode).then((res) => {});
  };

  const handleChange = (e) => {
    setGroupCode(e.target.value);
    setInputcheck('rgba(18, 127, 255)');
    setfontcolor('white');
  };

  const handleSubmit = (e) => {
    // alert('입력한 코드: ' + groupCode);
    e.preventDefault();
    requestEnter(groupCode);
    window.location.href = '/main';
  };

  return (
    <div>
      <ClassEnterPageLayout>
        <StyledForm onSubmit={handleSubmit}>
          <StyledLabel>
            <SyltedInput
              type="text"
              placeholder="선생님의 클래스 코드를 입력하세요."
              value={groupCode}
              onChange={(e) => setGroupCode(e.target.value)}
            />
          </StyledLabel>
          <StyledBtn>
            <ContainedButton
              btnType="primary"
              size="mid"
              text="완료"
              fontcolor={fontcolor}
              inputcheck={inputcheck}
              type="button"
            ></ContainedButton>
          </StyledBtn>
        </StyledForm>
      </ClassEnterPageLayout>
    </div>
  );
};

export default ClassEnterPage;
