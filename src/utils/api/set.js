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