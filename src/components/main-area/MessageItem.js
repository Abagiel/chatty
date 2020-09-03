import React from 'react';
import { connect } from 'react-redux';

export function MessageItem(props) {
	const { user, email, date, text } = props.info;
	let clas = props.currentUser.email === email && email !== null
		? "message-item you" 
		: "message-item";

	if (email === null && 
			props.currentUser.name + props.sessionId === user) {
		clas += ' you';
	}

	return (
		<div className={clas}>
			<div className="message-info">
				<div>
					<span className="message-avatar">{user[0]}</span>
					<span className="message-nickname">{user}</span>
				</div>
				<span className="message-date">{date}</span>
			</div>
			<p className="message-text">
				{text}
			</p>
		</div>
	)
}

function mapStateToProps({ currentUser, sessionId }) {
	return {currentUser, sessionId}
}

export default connect(mapStateToProps)(MessageItem);