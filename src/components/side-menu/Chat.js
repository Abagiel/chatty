import React from 'react';
import { connect } from 'react-redux';

import { toCamelName } from '../../base/utils';

function Chat(props) {
	const email = props.currentUser.email;
	return (
		<div 
			className="side-menu__item" 
			data-room={toCamelName(props.title)}
			onClick={(e) => {

				const type = e.target.closest('.side-menu__item').dataset.room;

				if (!email && props.rooms[type].owner === 'site' && props.rooms[type].private) return;

				if (props.private && props.rooms[type].owner.includes('@') && props.rooms[type].owner !== email) {
					if (e.target.querySelector('input'))
						return;

					const input = document.createElement('input');
					input.onblur = () => input.remove();
					input.onchange = (ev) => {
						if (ev.target.value === props.rooms[type].password) {
							props.changeRoom(type);
							input.remove();
						} else {
							return;
						}
					}

					e.target.append(input);
					input.focus();
					return;
				}
				
				props.changeRoom(e.target.closest('.side-menu__item').dataset.room);
			}} >
			<span className="side-menu__title">{props.title}</span>
			{props.svg}
		</div>
	)
}

function mapStateToProps({ currentUser, rooms }) {
	return {currentUser, rooms}
}

export default connect(mapStateToProps)(Chat);