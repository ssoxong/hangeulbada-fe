import React, { useState } from 'react';
import styled from 'styled-components';
import Counter from './components/Counter';
import StarDiff from './components/StarDiff';
import ContainedButton from '../../components/button/ContainedButton';
import SelectButton from './components/SelectButton';
import CreateQuestions from './CreateQuestions';
import { createQuestions } from '../../utils/api/question';
import { createSet } from '../../utils/api/set';
import LoadQuestions from './LoadQuestions';
import UploadButton from '../../components/button/UploadButton';

const SetCreatePageLayout = styled.div`
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
  font-family: 'DXSamgakGimbap Medium';
  font-size: 24px;
`;
const SetInformation = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  padding: 30px;
  margin: 24px;
  border-radius: 10px;
  font-family: 'DXSamgakGimbap Light';
  font-size: 20px;
  background-color: white;
`;
const SetTitle = styled.div`
  display: flex;
  margin-bottom: 30px;
  .title {
    margin-right: 12px;
  }
`;
const SetDesc = styled.div`
  display: flex;
  margin-bottom: 30px;
  .desc {
    margin-right: 12px;
  }
`;
const InputContainer = styled.input`
  font-family: 'DXSamgakGimbap Light';
  font-size: 20px;
  border: none;
  outline: none;
  background-color: transparent;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const QuestionCount = styled.div`
  display: flex;
  margin-bottom: 30px;
  align-items: center;
  .count {
    margin-right: 12px;
  }
`;
const Difficulty = styled.div`
  display: flex;
  align-items: center;
  .diff {
    margin-right: 12px;
  }
`;
const CreateLayout = styled.div`
  display: flex;
  flex-direction: column;
  .create-button {
    margin-right: 30px;
    margin-bottom: 14px;
    align-self: flex-end;
  }
`;

const SetCreatePage = () => {
  // steps === 0
  const [ setName, setSetName ]  = useState();
  const [ setDesc, setSetDesc ] = useState();
  const [ steps, setSteps ] = useState(0);
  const [ count, setCount ] = useState(10);
  const [ diff, setDiff ] = useState(0);
  const [ workbookId, setWorkbookId ] = useState(); 
  // steps === 1
  const [ action, setAction ] = useState();
  //steps === 2
  const [inputValue, setInputValue] = useState(['']);

  const createSetOnClick = () => {
    const createSetApi = async (setName, setDesc, diff, count, sDate, eDate) => {
      await createSet(setName, setDesc, diff, count, sDate, eDate)
        .then(res => {
          console.log(res);
          setWorkbookId(res.data.id)
        })
    }

    createSetApi(
      setName, 
      setDesc, 
      diff, 
      count, 
    );
    setSteps(steps + 1);
  }

  let bodyContent = (
    <>
      <SetInformation>
        <SetTitle>
          <div className='title'>세트 이름</div>
          <InputContainer
            type='text'
            value={setName}
            onChange={(e) => setSetName(e.target.value)}
            placeholder='세트1'
          />
        </SetTitle>
        <SetDesc>
          <div className='desc'>세트 설명</div>
          <InputContainer 
            type='text'
            value={setDesc}
            onChange={(e) => setSetDesc(e.target.value)}
            placeholder='세트에 관한 설명 작성'
          />
        </SetDesc>
        <QuestionCount>
          <div className='count'>문제 수</div>
          <Counter count={count} setCount={setCount} />
        </QuestionCount>
        <Difficulty>
          <div className='diff'>세트 난이도</div>
          <StarDiff diff={diff} setDiff={setDiff} />
        </Difficulty>
      </SetInformation>
      <ButtonContainer>
        <ContainedButton 
          onClick={createSetOnClick}
          btnType='primary' 
          size='mid' 
          text='다음' 
        />
      </ButtonContainer>
    </>
  )

  if (steps === 1) {
    bodyContent = (
      <>
        <SelectButton action={action} setAction={setAction} />
        <ButtonContainer>
          <ContainedButton 
            onClick={() => setSteps(steps+1)}
            btnType='primary' 
            size='mid' 
            text='다음' 
          />
      </ButtonContainer>
      </>
    )
  }

  const createOnClick = () => {
    const fetch = async (workbookId, inputValue) => {
      await createQuestions(workbookId, inputValue)
        .then(res => {
          console.log(res.data);
        })
    }
    console.log(inputValue);
    fetch(workbookId, inputValue);
  }

  if (steps === 2) {
    bodyContent = (
      action === 'load' ? (
        <UploadButton studentId='studentId' workbookId='workbookId' />
      ) : (
        <CreateLayout>
          <div className='create-button'>
            <ContainedButton 
              onClick={createOnClick}
              btnType='primary' 
              size='mid' 
              text='생성' 
            />
          </div>
          <CreateQuestions 
            count={count}
            inputValue={inputValue}
            setInputValue={setInputValue} 
          />
        </CreateLayout>
      )
    )
  }

  return (
    <SetCreatePageLayout>
      <HeaderBox>
        새로운 세트 만들기
      </HeaderBox>
      {bodyContent}
    </SetCreatePageLayout>
  );
};

export default SetCreatePage;