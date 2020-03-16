import React, { Component } from 'react';
import './App.scss';

// import NavBar from './components/NavBar/NavBar';
import LandingPage from './components/LandingPage/LandingPage';
import About from './components/About/About';

export default class App extends Component {

  render() {
    return (
      <div>
        <LandingPage />
        <About />
      </div>
    )
  }
}
