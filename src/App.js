import React, { Component } from 'react';
import './App.css';
import Grid from 'react-bootstrap/lib/Grid';	
import styled from 'styled-components';
import Header from './components/Header';
import Menu from './components/Menu.js';
import Main from './components/Main.js';

const url = process.env.PUBLIC_URL + '/img/back.png' 

const HeaderWrapper = styled.header`
	width: 100%;
	height: 49px;
	background-color: #242424;
	opacity: 0.8;
`

const MenuWrapper = styled.div`
	height: 89px;
	padding-top: 21px;
`

const MainWrapper = styled.main`
	height: 562px;
	padding-top: 131px;
	background: url(${url}) no-repeat;
	background-size: cover;
`

class App extends Component {
  render() {
    return (
		<div className="App">
			<HeaderWrapper>
				<Grid>
					<Header />
				</Grid>
			</HeaderWrapper>
			<MenuWrapper>
				<Grid>
					<Menu />
				</Grid>
			</MenuWrapper>
			<MainWrapper>
				<Grid>
					<Main />
				</Grid>	
			</MainWrapper>
		</div>        
    );
  }
}

export default App;
