import { client } from "./base";
import { privateHeaders } from "./base";

export const getSetList = async () => {
  let returnValue;

  await client
    .get(`/api/v1/workbook`, 
      {
        params: {

        },
        headers: privateHeaders
      }
    )
    .then((res) => {
      returnValue = res
    })
    .catch((err) => {
      console.log(err);
    })
  return returnValue;
}

export const getSet = async (workbookId) => {
  let returnValue;

  await client
    .get(`/api/v1/workbook/${workbookId}`,
      {
        headers: privateHeaders
      }
    )
    .then((res) => {
      returnValue = res;
    })
    .catch((err) => {
      console.log(err);
    })
    return returnValue;
}

export const removeSet = async (workbookId) => {
  let returnValue;

  await client 
    .delete(`/api/v1/workbook/${workbookId}`, {
      headers: privateHeaders,
    })
    .then((res) => {
      returnValue = res;
    })
    .catch((err) => {
      console.log(err);
    })
    return returnValue;
}

export const createSet = async (title, description, difficulty, questionNum, startDate, endDate) => {
  let returnValue;

  await client 
    .post(`/api/v1/workbook`, 
    {
      title: title,
      description: description,
      difficulty: difficulty,
      questionNum: questionNum,
      startDate: startDate,
      endDate: endDate,
    },
    {
      headers: privateHeaders
    }
  )
  .then((res) => {
    returnValue = res;
  })
  .catch((err) => {
    console.log(err);
  })
  return returnValue;
}