import React from 'react';
import styled from 'styled-components';

const TeacherMainLayout = styled.div`
  display: flex;
  flex-direction: column;

  .my-class {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 354px;
    height: 122px;
    margin-top: 20%;
    margin-bottom: 40px;
    border: hidden;
    border-radius: 10px;
    box-shadow: 0px 7px 7px rgba(0, 0, 0, 0.25), 
                6px 0px 6px rgba(0, 0, 0, 0.25); 
    font-family: 'DXSamgakGimbap Light';
    font-size: 24px;
    margin-bottom: 3px;
    background-color: white;
    &:hover {
      cursor: pointer;
    }
  }
  .my-set {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 354px;
    height: 122px;
    margin-top: 15%;
    margin-bottom: 40px;
    border: hidden;
    border-radius: 10px;
    box-shadow: 0px 7px 7px rgba(0, 0, 0, 0.25), 
                6px 0px 6px rgba(0, 0, 0, 0.25);
    font-family: 'DXSamgakGimbap Light';
    font-size: 24px;
    margin-bottom: 3px;
    background-color: white;
    &:hover {
      cursor: pointer;
    }
  }
`;

const TeacherMain = () => {
  
  const classOnClick = () => {
    window.location.href='/classList'
  }
  const setOnClick = () => {
    window.location.href='/setList'
  }

  return (
    <TeacherMainLayout>
      <button 
        className='my-class'
        onClick={classOnClick}
      >
        <div>나의 클래스</div>
      </button>
      <button 
        className='my-set'
        onClick={setOnClick}
      >
        <div>나의 세트</div>
      </button>
    </TeacherMainLayout>
  );
};

export default TeacherMain;