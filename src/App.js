import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import charmander from './assets/charmander.gif';
import charmeleon from './assets/charmeleon.gif';

const Charmander = () => (
  <>
    <h1>Charmander #004</h1>
    <img src={charmander} />
  </>
)


const Charmeleon = () => (
  <>
    <h1>Charmeleon #005</h1>
    <img src={charmeleon} />
  </>
)


class App extends Component {
  render() {
    return (
      <div className="App">
        <Charmeleon />
      </div>
    );
  }
}

export default App;
