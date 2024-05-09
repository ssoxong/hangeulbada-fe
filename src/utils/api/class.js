import { client } from "./base";
import { privateHeaders } from "./base";

export const getClassList = async () => {
  let returnValue;

  await client
    .get(`/api/v1/group`, 
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

export const createClass = async (groupName) => {
  let returnValue;

  await client
    .post(`/api/v1/group`,
      {
        groupName: groupName,
      },
      {
        headers: privateHeaders
      }
    )
    .then((res) => {
      console.log(res);
      returnValue = res;
    })
    .catch((err) => {
      console.log(err);
    })
  return returnValue;
}