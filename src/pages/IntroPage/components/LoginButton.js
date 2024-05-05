import React from 'react';
import styled from 'styled-components';

import { GoogleLoginIcon } from '../../../assets/icons';
import { useGoogleLogin } from '@react-oauth/google';
import { useLoginState } from '../../../utils/store/useLoginStore';

const LoginButtonLayout = styled.button`
  display: flex;
  border-width: 0;
  background-color: transparent;

  &:hover {
      cursor: pointer;
  }
`;

const LoginButton = () => {
  const { setLogin } = useLoginState();
  const responseGoogle = async () => {
    
  };

  const loginOnClick = useGoogleLogin({
    onSuccess: (res) => {
      responseGoogle(res.access_token);
      localStorage.setItem("accessToken", res.access_token);
      setLogin(true);
      window.location.reload();
      //localStorage.setItem("refreshToken", res.refreshToken);
    },
  });

  return (
    <LoginButtonLayout onClick={loginOnClick}>
      <img src={GoogleLoginIcon} alt="copy" />
    </LoginButtonLayout>
  );
};

export default LoginButton;