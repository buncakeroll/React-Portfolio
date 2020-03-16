import React, { Component } from 'react';
import './App.scss';

// import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';

export default class App extends Component {

  render() {
    return (
      <div>
        <Hero />
        <About />
      </div>
    )
  }
}
