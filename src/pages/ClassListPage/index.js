import React from 'react';
import styled from 'styled-components';

import ClassCard from './ClassCard';

const ClassListPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  position: relative;
  align-items: center;
`;

const ClassListPage = () => {
  const dummies = [
    {  
     title: 'title1',
     desc: 'desc1',
     code: 'code1',
    },
    {  
      title: 'title2',
      desc: 'desc2',
      code: 'code2',
    },
    {  
      title: 'title3',
      desc: 'desc3',
      code: 'code3',
    },
    {  
     title: 'title4',
      desc: 'desc4',
      code: 'code4',
    },
  ]
  return (
    <ClassListPageLayout>
      {dummies.map((dummy) => (
        <ClassCard title={dummy.title} desc={dummy.desc} code={dummy.code} />
      ))}      
    </ClassListPageLayout>
  );
};

export default ClassListPage;