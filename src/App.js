import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
        <div>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Hello />
          <div className="wrapper">
            <SayFullName name="Yuri" surname="Belousov" link="vk.com/the_toxin" />
            <SayFullName name="Vlad" surname="Alistratov" link="vk.com/vlad_alv" />
            <SayFullName name="Kostya" surname="Verechagin" link="vk.com/darklord2504" />
          </div>
        </div>
    );
  }
}

function Hello() {
  let phrase = "World"
  return (
    <h1> Hello {phrase}! </h1>
  )
}

function SayFullName(props) {
  return (
    <div>
      <h2> My name {props.name} {props.surname} </h2>
      <a href = {props.link}> Link on my contacts </a>
    </div>
  )
}

export default App;
