import React from 'react';
import styled from 'styled-components';
import UploadButton from '../../components/button/UploadButton';

const LoadQuestionsLayout = styled.div``;

const LoadQuestions = ({ studentId, workbookId }) => {
  return (
    <LoadQuestionsLayout>
      <UploadButton studentId={studentId} workbookId={workbookId} />
    </LoadQuestionsLayout>
  );
};

export default LoadQuestions;