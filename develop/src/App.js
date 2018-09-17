import React, { Component } from 'react';
import './App.css';
import './Slideshow.css';
import Slideshow from './components/Slideshow';
import Content from './components/Content';
import handleSlideshow from './components/handle/handleSlideshow';

class App extends Component {
  componentDidMount() {
    new handleSlideshow(document.getElementsByClassName('slideshow')[0]);
  }
  render() {
    return (
      <div className="App">
        <Slideshow />
        {/* <Content /> */}
      </div>
    );
  }
}

export default App;
