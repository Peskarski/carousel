import React from 'react';
import { Application } from './styles';
import Carousel from './components/Carousel/Carousel';
import data from './content/content';

const App = () => {
  return (
    <Application>
      <h1>Carousel</h1>
      <Carousel data={data} size='400' />
    </Application>
  )
}

export default App;
