import React from 'react';
import { connect } from 'react-redux';

import { toCamelName } from '../../base/utils';

function Chat(props) {
	const email = props.currentUser.email;

	return (
		<div 
			className="side-menu__item" 
			data-room={toCamelName(props.title)}
			onClick={(e) => chatClickHandler(e, email, props) }>
			<span className="side-menu__title">{props.title}</span>
			{props.svg}
		</div>
	)
}

function chatClickHandler(e, email, props) {
	const type = e.target.closest('.side-menu__item').dataset.room;

	if (!email && 
			props.rooms[type].owner === 'site' && 
			props.rooms[type].private) return;

	if (props.private && 
			props.rooms[type].owner.includes('@') && 
			props.rooms[type].owner !== email) {
		createPassInput(e, props.rooms, type, props.changeRoom);
		return;
	}
				
	props.changeRoom(e.target.closest('.side-menu__item').dataset.room);
}

function createPassInput(e, rooms, type, func) {
	if (e.target.querySelector('input')) return;

	const input = document.createElement('input');
	input.setAttribute('placeholder', 'Enter password');

	input.onblur = () => input.remove();
	input.onchange = (ev) => {
		if (ev.target.value === rooms[type].password) {
			func(type);
			input.remove();
		} else {
			return;
		}
	}

	e.target.append(input);
	input.focus();
}

function mapStateToProps({ currentUser, rooms }) {
	return {currentUser, rooms}
}

export default connect(mapStateToProps)(Chat);