import styled from 'styled-components';

export const Circle = styled.div`
  width: 20px;
  height: 20px;
  background: ${props => props.activeCircle === Number(props.index) ? 'grey' : 'black'};
  border-radius: 50%;
  cursor: pointer;
  margin: 10px;
`

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 16px auto;
`
