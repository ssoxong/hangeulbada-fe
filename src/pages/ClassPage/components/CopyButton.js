import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { CopyButtonIcon } from '../../../assets/icons';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CopyButtonLayout = styled.button`
    display: flex;
    border-width: 0;
    background-color: transparent;

    &:hover {
        cursor: pointer;
    }
`;

const CustomToastLayout = styled.div`
  font-family: 'DXSamgakGimbap Light';
  font-size: 16px;
  color: black;
`;

const CustomToast = () => (
  <CustomToastLayout>
    클래스 코드가 복사되었습니다.
  </CustomToastLayout>
);

const CopyButton = () => {
  const notify = () => toast(<CustomToast />);

  const onClick = () => {
    const copyClassCode = async (text) => {
      var textarea = document.createElement("textarea");
      textarea.value = text; 
      document.body.appendChild(textarea);
      textarea.select();
      textarea.setSelectionRange(0, 9999); 
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    copyClassCode('123py');
    notify();
  }

  return (
    <>
      <CopyButtonLayout onClick={onClick}>
        <img src={CopyButtonIcon} alt="copy" />
      </CopyButtonLayout>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        limit={1}
      />
    </>
  );
};

export default CopyButton;