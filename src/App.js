import React, { Component } from 'react';
import './App.scss';

import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';

export default class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <Hero />
      </div>
    )
  }
}
