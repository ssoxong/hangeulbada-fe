import { client } from "./base";

export const requestLogin = async (uid, name, email, role) => {
  let returnValue;

  await client
    .post(`/login/oauth2/code/google/signup`,
      {
        uid: uid,
        name: name,
        email: email,
        role: role,
      }
    )
    .then((res) => {
      localStorage.setItem("accessToken", res.data.token.accessToken);
      returnValue = res;
    })
    .catch((err) => {
      console.log(err);
    })
  return returnValue;
}