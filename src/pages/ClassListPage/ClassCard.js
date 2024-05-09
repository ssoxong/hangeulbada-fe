import React from 'react';
import styled from 'styled-components';
import ContainedButton from '../../components/button/ContainedButton';
import { RemoveIcon } from '../../assets/icons';
import { ToastContainer, toast } from 'react-toastify';

const ClassCardLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  margin: 12px 15px;
  border-radius: 14px;
  background-color: white;
`;
const ClassCardInformation = styled.div`
  padding: 8px 12px;
  .title {
    font-family: 'DXSamgakGimbap Bold';
    font-size: 18px;
    margin-bottom: 3px;
  }
  .desc {
    font-family: 'DXSamgakGimbap Light';
    font-size: 16px;
  }
`
const RemoveButton = styled.button`
  display: flex;
  align-items: center;
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


const ClassCard = ({title, desc, code, isRemove}) => {

  const notify = () => toast(<CustomToast />);

  const onClick = (code) => {
    const copyClassCode = async (text) => {
      var textarea = document.createElement("textarea");
      textarea.value = text; 
      document.body.appendChild(textarea);
      textarea.select();
      textarea.setSelectionRange(0, 9999); 
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    copyClassCode(code);
    notify();
  }

  return (
    <>
      <ClassCardLayout>
        <ClassCardInformation>
          <div className='title'>{title}</div>
          <div className='desc'>{desc}</div>
        </ClassCardInformation>
        {isRemove ? (
          <RemoveButton>
            <img src={RemoveIcon} alt="remove" />
          </RemoveButton>
        ) : (
          <ContainedButton
            btnType="tertialy"
            size="mid"
            text='코드 복사'
            onClick={() => onClick(code)}
          >
            {code}
          </ContainedButton>
        )}
      </ClassCardLayout>

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

export default ClassCard;