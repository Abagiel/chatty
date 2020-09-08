import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addNotify } from '../../base/reducer/actions';

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
			props.rooms[type].private) {
		props.onAddNotify({
			text: 'Need to login', 
			type: 'danger'
		});
		return;
	}

	if (props.private && 
			props.rooms[type].owner.includes('@') && 
			props.rooms[type].owner !== email &&
			props.selectedRoom !== type) {
		createPassInput(e, props.rooms, type, props.changeRoom, props.onAddNotify);
		return;
	}
				
	props.changeRoom(e.target.closest('.side-menu__item').dataset.room);
}

function createPassInput(e, rooms, type, func, notify) {
	if (e.target.querySelector('input')) return;

	const input = document.createElement('input');
	input.setAttribute('placeholder', 'Enter password');

	input.onblur = () => input.remove();
	input.onchange = (ev) => {
		if (ev.target.value === rooms[type].password) {
			notify({text: 'Password is right', type: 'success'});
			func(type);
			input.remove();
		} else {
			notify({text: 'Password is wrong', type: 'danger'});
			return;
		}
	}

	e.target.append(input);
	input.focus();
}

function mapStateToProps({ currentUser, rooms, selectedRoom }) {
	return {currentUser, rooms, selectedRoom}
}

function mapDispatchToProps(dispatch) {
	 return bindActionCreators({
    onAddNotify: addNotify
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);