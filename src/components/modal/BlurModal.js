import React from 'react';
import styled from 'styled-components';
import ContainedButton from '../button/ContainedButton';

const BlurModalLayout = styled.div`
  box-sizing: border-box;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(255,255,255,0.15);
  backdrop-filter: blur(5px);
  animation: modal-bg-show 500ms;
  @keyframes modal-bg-show {
      from {
          opacity: 0;
      }
      to {
          opacity: 1;
      }
  }
  z-index: 900;
  overflow: hidden;
`;
const ModalLayout = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 901;
  overflow: hidden;
`;
const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  border-radius: 15px;
  width: 100%;
  max-width: 500px;
  height: 100%;
  margin: 0 auto;
  margin-top: 20vh;
  border: none;
  background-color: transparent;
`;

const BlurModal = ({ innerDatas }) => {
  return (
    <BlurModalLayout>
      <ModalLayout>
        <ModalInner>
          {innerDatas}
        </ModalInner>
      </ModalLayout>
    </BlurModalLayout>
  );
};

export default BlurModal;