import styled from 'styled-components';

const height = screen.width - 16;

export const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const CarouselItem = styled.div`
    width: ${props => `${props.size}px`};
    height: ${props => `${props.size}px`};
    min-width: ${props => `${props.size}px`};
    overflow-x: hidden;

  @media screen and (max-width: 720px) {
    min-width: 100%;
    height: ${height + 'px'};
  }

  & section {
    display: flex;
    flex-direction: row;
    width: ${props => `${props.length * 100}%`};
    left: ${props => `${props.position * (-props.size)}px`};

    @media screen and (max-width: 720px) {
      left: ${props => `${props.swipeDelta === 0 ? props.position * (-height) :
      props.position * (-height) + (props.swipeDelta)}px`};
  }

    height: 100%;
    position: relative;
    transition: ${props => props.swipeDelta === 0 && 'left 0.5s ease'};

    & div {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`

export const Button = styled.button`
  width: ${props => `${props.size / 6}px`};
  max-width: 50px;
  height: ${props => `${props.size / 6}px`};
  max-height: 50px;
  margin: auto 10px;
  border: none;
  background-color: white;
  cursor: pointer;

  @media screen and (max-width: 720px) {
      display: none;
  }
`
