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
					{createHeaderUserBtn(setModal, 'Create chat', true)}
					{svgs.create}
				</div>
				<div>
					{createHeaderUserBtn(props.onLogout, 'Log Out')}
					{svgs.exit}
				</div>
			</div>
		</div>
	)
}

function createChatsList(props) {
	return Object
				 .values(props.rooms)
				 .map(room => createChatListItem(room, props));
}

function createChatListItem(room, props) {
	if (props.currentUser.email === room.owner) {
		const name = toCamelName(room.name);
		return (
			<li key={room.name}>
				<span 
					onClick={() => props.onChangeRoom(name)}>
					{room.name}
				</span>
				{createHeaderUserBtn(props.onDeleteRoom, svgs.delete, name)}
			</li>
			)
		}
		return null;
}

function createHeaderUserBtn(func, btnContent, arg = null) {
	return <button 
				   onClick={() => func(arg)} 
				   className="header-user__btn">
				   {btnContent}
				 </button>
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