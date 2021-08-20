import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Signin from './components/Login/Login';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import './App.css';
import ParticleBackground from './components/ParticleBackground/ParticleBackground';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParticleBackground className='particles'/>
        <Navigation/>
        <Logo className="flex items-center"/>
        <Signin/>
        <Rank/>
        <ImageLinkForm/>
        {/*          
          <FaceRecognition/>
        */}
      </div>
    );
  };
}

export default App;
