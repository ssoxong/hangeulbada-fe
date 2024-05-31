import React from 'react';
import { StarIcon } from '../../assets/icons';

const Stars = ({ difficulty }) => {
  
  const stars = Array.from({ length: difficulty }, (_, index) => (
    <img key={index} src={StarIcon} alt='star' />
  ));

  return (
    <>
      {stars}
    </>
  )
}

export default Stars;