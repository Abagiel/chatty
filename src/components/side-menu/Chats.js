import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeRoom } from '../../base/reducer/actions';

import Chat from './Chat';

import { svgs } from '../../base/constants';

export function Chats(props) {
	const rooms = getRooms(props);

	return (
		<div className="side-menu__chats">
			<h3 className="border-b">{props.title}</h3>
			{rooms}
		</div>
	)
}

function getRooms(props) {
	return Object.values(props.rooms).map(room => {
		if (room.owner === 'site' && props.ownerIsSite) {
			return <Chat 
				svg={svgs[room.name]} 
				title={room.name}
				changeRoom={props.onChangeRoom}/>
		} else if (room.owner !== 'site' &&
				!props.ownerIsSite) {
				return <Chat 
					svg={svgs['open room']} 
					title={room.name}
					changeRoom={props.onChangeRoom}/>
		} else {
			return null;
		}

	})
}

function mapStateToProps({rooms}) {
	return {rooms};
}

function mapDispatchToProps(dispatch) {
	 return bindActionCreators({
    onChangeRoom: changeRoom
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Chats);