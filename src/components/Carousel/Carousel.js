import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { CarouselItem, Main, Button } from './styles';
import { PrevButton, NextButton } from './Buttons'
import Circles from '../Circles/Circles'

const Carousel = ({ data, size }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    currentIndex > 0 && setCurrentIndex(currentIndex - 1);
  }

  const handleNextClick = () => {
    currentIndex < (data.length - 1) && setCurrentIndex(currentIndex + 1);
  }

  const swipeHandlers = useSwipeable({
    onSwipedRight: () => currentIndex > 0 && setCurrentIndex(currentIndex - 1),
    onSwipedLeft: () => currentIndex < (data.length - 1) && setCurrentIndex(currentIndex + 1)
  });

  const onCircleClick = (e) => {
    setCurrentIndex(Number(e.target.dataset.value));
  }

  return (
    <>
      <Main>
        <Button onClick={handlePrevClick} size={size}>
          {PrevButton}
        </Button>
        <CarouselItem {...swipeHandlers} position={currentIndex} size={size} length={data.length}>
          <section>
            {data.map((element, index) => (
              <div key={index}>{element}</div>
            ))}
          </section>
        </CarouselItem>
        <Button onClick={handleNextClick} size={size}>
          {NextButton}
        </Button>
      </Main >
      <Circles amount={data.length} activeCircle={currentIndex} handleCircleClick={onCircleClick}/>
    </>
  )
}

export default Carousel;
