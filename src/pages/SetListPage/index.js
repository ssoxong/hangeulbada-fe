import React, { useState } from "react";
import styled from "styled-components";

import SetCard from "./SetCard";
import ContainedButton from "../../components/button/ContainedButton";
import BlurModal from "../../components/modal/BlurModal";

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
        <BlurModal
          innerDatas={
            <>
              {dummies.map((dummy) => (
                  <SetCard key={dummy.title} title={dummy.title} desc={dummy.desc} code={dummy.code} isRemove />
              ))}
              <ContainedButton btnType="primary" size="mid" text="완료" onClick={submitOnClick}/>
            </>
          }
        />
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
