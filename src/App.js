import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Signin from './components/Login/Login';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Logo className="flex items-center"/>
        <Signin/>
        <ImageLinkForm/>
        {/*          
          <PageLinkForm/>
        */}
      </div>
    );
  }
}

export default App;
