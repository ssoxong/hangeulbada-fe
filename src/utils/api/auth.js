import axios from "axios";

export const requestLogin = async (req) => {
  let returnValue;

  await axios
    .post(`/login/oauth2/code/google/signup`)
    .then((res) => {
    })
  
}