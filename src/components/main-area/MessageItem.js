import React from 'react';
import { connect } from 'react-redux';

export function MessageItem(props) {
	const { user, date, text } = props.info;
	const clas = getClass(props);

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

function getClass({sessionId, currentUser, info: { email, user }}) {
	let clas = currentUser.email === email && email !== null
		? "message-item you" 
		: "message-item";

	if (email === null && 
			currentUser.name + sessionId === user) {
		clas += ' you';
	}

	return clas;
}

function mapStateToProps({ currentUser, sessionId }) {
	return {currentUser, sessionId}
}

export default connect(mapStateToProps)(MessageItem);