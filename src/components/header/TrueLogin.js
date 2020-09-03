import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { logout } from '../../base/reducer/actions';

import { CreateChatModal } from '../create-chat-modal/CreateChatModal';

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

function mapStateToProps({currentUser}) {
	return {currentUser};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		onLogout: logout
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TrueLogin);