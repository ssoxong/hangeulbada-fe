import { client } from './base';
import { privateHeaders } from './base';

export const createQuestions = async (workbookId, content) => {
  let returnValue;

  await client
    .post(
      `/api/v1/workbook/${workbookId}/questions/new`,
      {
        content: content,
      },
      {
        headers: privateHeaders,
      }
    )
    .then((res) => {
      returnValue = res;
    })
    .catch((err) => {
      console.log(err);
    });
  return returnValue;
};

export const getAllQuestions = async () => {
  let returnValue;

  await client
    .post(
      `/api/v1/questions`,
      {},
      {
        headers: privateHeaders,
      }
    )
    .then((res) => {
      returnValue = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return returnValue;
};

export const getSetQuestions = async (workbookId) => {
  let returnValue;

  await client
    .get(`/api/v1/workbook/${workbookId}/questions`, {
      headers: privateHeaders,
    })
    .then((res) => {
      returnValue = res;
    })
    .catch((err) => {
      console.log(err);
    });
  return returnValue;
};

export const addQuestion = async (workbookId, content) => {
  let returnValue;

  await client
    .post(
      `/api/v1/workbook/${workbookId}/questions`,
      {
        content: content,
      },
      {
        headers: privateHeaders,
      }
    )
    .then((res) => {
      returnValue = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return returnValue;
};

export const removeQuestion = async (questionId) => {
  let returnValue;

  await client
    .delete(`/api/v1/questions/${questionId}`, {
      headers: privateHeaders,
    })
    .then((res) => {
      returnValue = res;
    })
    .catch((err) => {
      console.log(err);
    });
  return returnValue;
};

export const getQuestionsInSet = async (workbookId, questionId) => {
  let returnValue;

  await client
    .get(`/api/v1/workbook/${workbookId}/questions/${questionId}`, {
      headers: privateHeaders,
    })
    .then((res) => {
      returnValue = res;
    })
    .catch((err) => {
      console.log('err: ', err);
    });

  return returnValue;
};
