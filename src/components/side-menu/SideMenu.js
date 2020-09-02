import React, { Component } from 'react';

import Chats from './Chats';

import './side-menu.css';

export class SideMenu extends Component {
	render() {
		return (
			<aside>
				<div>
					<Chats title="Common chats"/>
				</div>
			</aside>
		)
	}
}