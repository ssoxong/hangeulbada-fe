import React, { useEffect } from 'react';
import styled from 'styled-components';
import { StarGray, StarYellow } from '../../../assets/icons';


const StarDiffLayout = styled.div`
`;
const StarButton = styled.button`
  padding-right: 0px;
  padding-left: 0px;
  border-width: 0;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;

let difficulty = [false, false, false, false, false]

const StarDiff = ({ diff, setDiff }) => {

  const buttonOnClick = (idx) => {
    difficulty = [false, false, false, false, false];
    for (let i = 0; i <= idx; i++) {
      difficulty[i] = true
    }
    setDiff(idx+1);
  }

  useEffect(() => {
    setDiff(diff);
  }, [diff])

  return (
    <StarDiffLayout>
      {difficulty.map((e, idx) => (
        difficulty[idx] ? 
          (<StarButton 
            key={idx} 
            onClick={() => buttonOnClick(idx)}
          >
            <img src={StarYellow} alt='on' />
          </StarButton>) : 
          (<StarButton 
            key={idx} 
            onClick={() => buttonOnClick(idx)}
          >
            <img src={StarGray} alt='off' />
          </StarButton>
          )
      ))}
    </StarDiffLayout>
  );
};

export default StarDiff;