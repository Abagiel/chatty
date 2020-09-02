import React, { Component } from 'react';

import Header from './header/Header';
import { SideMenu } from './side-menu/SideMenu';
import MainArea from './main-area/MainArea';

import './app.css';

class App extends Component {
	render() {
		return (
			<div className='app-container'>
				<Header/>
				<SideMenu/>
				<MainArea/>
			</div>
		)
	}
}

export default App;
