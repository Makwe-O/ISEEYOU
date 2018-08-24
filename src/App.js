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
      imageUrl: '',
      box:{

      }
    }
  }
   
  calculateFaceLocation = (data) =>{
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('bounding-box');
    const width = Number(image.width);
    const height = Number(image.height);
    return{
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  getBorderLocation = (box) =>{
    this.setState({box: box});
    console.log(box);
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
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => this.getBorderLocation(this.calculateFaceLocation(response)))
    .catch(err => console.log('Error', err.statusText));
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
        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
      </div>  
    );
  }
}

export default App;
