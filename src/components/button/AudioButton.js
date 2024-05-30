import React from 'react';
import styled from 'styled-components';

import useSound from 'use-sound';

import { RightTriangle } from '../../assets/icons';
import { playing } from '../../assets/icons';
import { useState } from 'react';

const AudioButtonLayout = styled.div`
  width: 30px;
  height: 30px;
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
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { stop }] = useSound(url, {
    onend: () => {
      setIsPlaying(false);
    },
  });

  const handleButtonClick = () => {
    if (isPlaying) {
      stop();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };
  return (
    <AudioButtonLayout onClick={handleButtonClick}>
      <img className="item-button" src={isPlaying ? playing : RightTriangle} alt="button" />
    </AudioButtonLayout>
  );
};

export default AudioButton;
