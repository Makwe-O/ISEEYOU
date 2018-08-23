import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import './App.css'

const app = new Clarifai.App({
  apiKey: 'de21dde880e248a29c276dbe82178cfe'
 });

const particles = {
  particles: {
    number:{
      value:130,
      density:{
        enable: true,
        value_area: 1874
      }
    },
    color:{
      value: "#6d6d6d"
    },
    size:{
      value:2
    },
    shape:{
      type: "edge"
    },
    interactivity:{
      onhover:{
        enable: true,
        mode: "repulse"
      }
    }
    
    
  }
  }

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: ''
    }
  }
   

  onInputChange = (event) =>{
   this.setState({
     input: event.target.value
   })
  }
  onButtonSubmit = () =>{
    this.setState({
      imageUrl: this.state.input
    })
    app.models.predict(Clarifai.COLOR_MODEL, this.state.input).then(
    function(response) {
      console.log(response);
    },
    function(err) {
      console.log('Error', err);
    }
  );
  }

  render() {
    return (
      <div className={'container'}>
        <Particles className={'particles'} 
          params={particles}
          />
          <Navigation />
          <Rank />
          <ImageLinkForm 
            onInputChange = {this.onInputChange} 
            onButtonSubmit = {this.onButtonSubmit}
          />
        <FaceRecognition imageUrl={this.state.imageUrl}/>
      </div>  
    );
  }
}

export default App;
