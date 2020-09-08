import React from 'react';

import Header from './header/Header';
import { SideMenu } from './side-menu/SideMenu';
import MainArea from './main-area/MainArea';
import Notificator from './notificator/Notificator';

import './app.css';

function App() {
  return (
    <div className='app-container'>
			<Header/>
			<SideMenu/>
			<MainArea/>
			<Notificator/>
		</div>
  )
}

export default App;