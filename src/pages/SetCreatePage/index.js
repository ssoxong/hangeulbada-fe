import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Counter from './components/Counter';
import StarDiff from './components/StarDiff';
import ContainedButton from '../../components/button/ContainedButton';
import SelectButton from './components/SelectButton';
import CreateQuestions from './CreateQuestions';
import { createQuestions } from '../../utils/api/question';
import { createSet } from '../../utils/api/set';
import LoadQuestions from './LoadQuestions';

const SetCreatePageLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  position: relative;
`;
const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;
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
const LoadLayout = styled.div`
  display: flex;
  flex-direction: column;
  .load-button {
    margin-right: 30px;
    margin-bottom: 14px;
    align-self: flex-end;
  }
`;
const TextBox = styled.div`
  .selected {
    margin-top: 8px;
    font-family: 'DXSamgakGimbap Light';
    font-size: 15px;
    color: #515151;
  }
`;
const SetCreatePage = () => {
  const [steps, setSteps] = useState(0);
  // steps === 0
  const [setName, setSetName]  = useState();
  const [setDesc, setSetDesc] = useState();
  const [count, setCount] = useState(10);
  const [diff, setDiff] = useState(0);
  const [zeroFulfilled, setZeroFulfilled] = useState(false);
  // steps === 1
  const [action, setAction] = useState();
  //steps === 2
  const [workbookId, setWorkbookId] = useState(); 
  const [inputValue, setInputValue] = useState([]);
  const [selectFulfilled, setSelectFulfilled] = useState(false);
  const [writeFulfilled, setWriteFulfiiled] = useState(false);

  useEffect(() => {
    if (setName && setDesc && diff !== 0) {
      setZeroFulfilled(true);
    }
    else {
      setZeroFulfilled(false);
    }
  }, [setName, setDesc, diff])

  useEffect(() => {
    if (inputValue.length === count) {
      setSelectFulfilled(true);
    }
    else {
      setSelectFulfilled(false);
    }
  }, [inputValue])

  useEffect(() => {
    if (inputValue.includes('') || inputValue.length !== count) {
      setWriteFulfiiled(false);
    }
    else {
      setWriteFulfiiled(true);
    }
  }, [inputValue])

  const createSetOnClick = () => {
    const createSetApi = async (setName, setDesc, diff, count, sDate, eDate) => {
      await createSet(setName, setDesc, diff, count, sDate, eDate)
        .then(res => {
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
          disabled={!zeroFulfilled}
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
            disabled={!action}
          />
      </ButtonContainer>
      </>
    )
  }

  const createOnClick = () => {
    const fetch = async (workbookId, inputValue) => {
      await createQuestions(workbookId, inputValue)
        .then(res => {
          window.location.href='/setList';
        })
    }
    fetch(workbookId, inputValue);
  }

  if (steps === 2) {
    bodyContent = (
      action === 'load' ? (
        <LoadLayout>
          <div className='load-button'>
            <ContainedButton 
              onClick={createOnClick}
              btnType='primary' 
              size='mid' 
              text='생성'
              disabled={!selectFulfilled} 
            />
          </div>
          <LoadQuestions 
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
        </LoadLayout>
      ) : (
        <CreateLayout>
          <div className='create-button'>
            <ContainedButton 
              onClick={createOnClick}
              btnType='primary' 
              size='mid' 
              text='완료' 
              disabled={!writeFulfilled}
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
        {action === 'load' && steps === 2 ? 
          (
            <TextBox>
              <div>기존 문장에서 가져오기</div>
              <div className='selected'>현재 {inputValue.length}개 선택됨</div>
            </TextBox>
          ) : (
            <div>
              새로운 세트 만들기
            </div>
          )}
      </HeaderBox>
      {bodyContent}
    </SetCreatePageLayout>
  );
};

export default SetCreatePage;