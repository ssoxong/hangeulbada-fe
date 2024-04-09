import React from 'react';
import styled from 'styled-components';
import ContainedButton from '../../components/button/ContainedButton';

const ClassCreatePageLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  position: relative;
`;
const HeaderBox = styled.div`
  display: flex;
  text-align: start;
  margin-left: 24px;
  margin-right: 24px;
  margin-top: 60px;
  margin-bottom: 0px;
  border-radius: 10px;
  background-color: transparent;
  /* Medium */
  font-size: 24px;
`;
const ClassInformation = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  padding: 30px;
  margin: 24px;
  border-radius: 10px;
  /* Light */
  font-size: 20px;
  background-color: white;
`;
const ClassTitle = styled.div`
  display: flex;
  margin-bottom: 30px;
  .title {
    margin-right: 12px;
  }
`;
const ClassDesc = styled.div`
  display: flex;
  .desc {
    margin-right: 12px;
  }
`;
const InputContainer = styled.input`
  /* Light */
  font-size: 20px;
  border: none;
  outline: none;
  background-color: transparent;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CassCreatePage = () => {
  return (
    <ClassCreatePageLayout>
      <HeaderBox>
        새로운 클래스 만들기
      </HeaderBox>
      <ClassInformation>
        <ClassTitle>
          <div className='title'>클래스 이름</div>
          <InputContainer 
            placeholder='클래스A'
          />
        </ClassTitle>
        <ClassDesc>
          <div className='desc'>클래스 설명</div>
          <InputContainer 
            placeholder='클래스에 관한 설명 작성'
          />
        </ClassDesc>
      </ClassInformation>
      <ButtonContainer>
        <ContainedButton 
          onClick={() => {}}
          btnType='primary' 
          size='mid' 
          text='완료' 
        />
      </ButtonContainer>
    </ClassCreatePageLayout>
  );
};

export default CassCreatePage;