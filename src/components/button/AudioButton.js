import React from 'react';
import styled from 'styled-components';

import useSound from 'use-sound';

import { RightTriangle } from '../../assets/icons';

const AudioButtonLayout = styled.div`
  .item-button {
    margin-left: 20px;
    white-space: pre-line;
    flex-basis: 5%;

    &:hover {
      cursor: pointer;
    }
  }
`;

const AudioButton = ({ url }) => {
  const [play] = useSound(url);

  return (
    <AudioButtonLayout onClick={play}>
      <img 
        className='item-button' 
        src={RightTriangle} 
        alt='button'
      />
    </AudioButtonLayout>
  );
};

export default AudioButton;