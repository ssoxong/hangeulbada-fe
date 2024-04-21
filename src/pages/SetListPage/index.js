import React, { useState } from "react";
import styled from "styled-components";

import SetCard from "./SetCard";
import ContainedButton from "../../components/button/ContainedButton";

const Blur = styled.div`
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
const SetListPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  position: relative;
`;
const SetListBox = styled.div`
  margin: 10px 18px;
`;
const SetListHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 24px;
`;
const SetListTitle = styled.div`
  font-family: "DXSamgakGimbap Medium";
  font-size: 24px;
`;
const SetListButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 45%;
`;

const SetListPage = () => {
  const [isRemoveClicked, setIsRemoveClicked] = useState(false);

  const dummies = [
    {
      title: "title1",
      desc: "desc1",
    },
    {
      title: "title2",
      desc: "desc2",
    },
    {
      title: "title3",
      desc: "desc3",
    },
    {
      title: "title4",
      desc: "desc4",
    },
  ];
  const createOnClick = () => {
    window.location.href = "/classCreate";
  };
  const removeOnClick = () => {
    setIsRemoveClicked(true);
  };
  const submitOnClick = () => {
    setIsRemoveClicked(false);
  };

  return (
    <>
      {isRemoveClicked && (
          <Blur>
            <ModalLayout>
              <ModalInner>
                {dummies.map((dummy) => (
                  <SetCard key={dummy.title} title={dummy.title} desc={dummy.desc} code={dummy.code} isRemove />
                ))}
                <ContainedButton btnType="primary" size="mid" text="완료" onClick={submitOnClick}/>
              </ModalInner>
            </ModalLayout>
          </Blur>
        )}
      <SetListPageLayout>
        <SetListBox>
          <SetListHeader>
            <SetListTitle>나의 세트</SetListTitle>
            <SetListButtonBox>
              <ContainedButton 
                btnType="primary" 
                size="mid" 
                text="생성" 
                onClick={createOnClick}
              />
              <ContainedButton
                btnType="secondary"
                size="mid"
                text="삭제"
                outline
                onClick={removeOnClick}
              />
            </SetListButtonBox>
          </SetListHeader>
          {dummies.map((dummy, index) => (
            <SetCard key={index} title={dummy.title} desc={dummy.desc} />
          ))}
        </SetListBox>
      </SetListPageLayout>
    </>
  );
};

export default SetListPage;
