import React from 'react';
import { connect } from 'react-redux';

import { capitalize } from '../../base/utils';

function Chat(props) {
	const email = props.currentUser.email;
	return (
		<div 
			className="side-menu__item" 
			data-room={getRoomTitle(props.title)}
			onClick={(e) => {
				if (!email && props.title.includes('private'))return;
				
				props.changeRoom(e.target.closest('.side-menu__item').dataset.room);
			}} >
			{props.svg}
			<span className="side-menu__title">{props.title}</span>
			<span className="side-menu__message">0</span>
		</div>
	)
}

function getRoomTitle(name) {
	const nameArray = name.split(' ');

	return nameArray[0] + capitalize(nameArray[1])
}

function mapStateToProps({ currentUser }) {
	return {currentUser}
}

export default connect(mapStateToProps)(Chat);