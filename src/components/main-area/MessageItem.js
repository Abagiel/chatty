import React from 'react';
import { connect } from 'react-redux';

export function MessageItem(props) {
	const { user, email, date, text } = props.info;
	const clas = props.currentUser.email === email 
		? "message-item you" 
		: "message-item";

	return (
		<div className={clas}>
			<div className="message-info">
				<div>
					<span className="message-avatar">A</span>
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

function mapStateToProps({ currentUser }) {
	return {currentUser}
}

export default connect(mapStateToProps)(MessageItem);