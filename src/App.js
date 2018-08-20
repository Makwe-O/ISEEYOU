import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';


class App extends Component {
  render() {
    return (
      <div className={'container'}>
        <Navigation />
        <Rank />
        <ImageLinkForm />
      </div>
      /* <FaceRecognition />  */
    );
  }
}

export default App;
