import React from 'react';
import { Circle, Main } from './styles';

const Circles = ({ amount, handleCircleClick, activeCircle }) => {

  return (
    <Main>
      {[...Array(amount)].map((item, index) => <Circle key={index} onClick={handleCircleClick}
      data-value={index} activeCircle={activeCircle} index={index}/>) }
    </Main>
  )
}

export default Circles;
