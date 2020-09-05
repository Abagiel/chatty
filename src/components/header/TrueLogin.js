import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { logout, deleteRoom, changeRoom } from '../../base/reducer/actions';

import { CreateChatModal } from '../create-chat-modal/CreateChatModal';

import { toCamelName } from '../../base/utils'
import { svgs } from '../../base/constants';

function TrueLogin(props) {
	const [isModal, setModal] = useState(false);

	const modal = isModal
		? <CreateChatModal setView={setModal}/> 
		: null;

	return (
		<div className="header-user">
			{modal}
			{props.currentUser.name[0]}
			<div className="header-user__menu">
				<h4 className="border-b">{props.currentUser.name}</h4>
				<div>
					<button className="header-user__btn">My chats</button>
					{svgs.arrowRight}
					<ul>
						{createChatsList(props)}
					</ul>
				</div>
				<div>
					<button onClick={() => setModal(true)} className="header-user__btn">Create chat</button>
					{svgs.create}
				</div>
				<div>
					<button onClick={() => props.onLogout()} className="header-user__btn">Log Out</button>
					{svgs.exit}
				</div>
			</div>
		</div>
	)
}

function createChatsList({currentUser, rooms, onDeleteRoom, onChangeRoom}) {
	return Object.values(rooms).map(room => {
		if (currentUser.email === room.owner) {
			const name = toCamelName(room.name);
			return <li key={room.name}>
				<span onClick={() => onChangeRoom(name)}>{room.name}</span>
				<button className="header-user__btn" onClick={() => onDeleteRoom(name)}>{svgs.delete}</button></li>
		}
		return null;
	})
}

function mapStateToProps({currentUser, rooms}) {
	return {currentUser, rooms};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		onLogout: logout,
		onDeleteRoom: deleteRoom,
		onChangeRoom: changeRoom
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TrueLogin);