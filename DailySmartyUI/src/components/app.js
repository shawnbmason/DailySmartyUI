 import React, { Component } from 'react';
 import Logo from './logo';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div>logo</div>
        <Logo/>
        <h1>DevCamp React Starter</h1>
        <h2>React Redux Router</h2>
      </div>
    );
  }
}
