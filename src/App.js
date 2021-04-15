import React from 'react';
import './styles.css';
import Carousel from './components/Carousel/Carousel';
import data from './content/content';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>Carousel</h1>
        <Carousel data={data} size='400'/>
      </div>
    )
  }
}

export default App;
