import React from 'react';
import { connect } from 'react-redux';

import MessageItem from './MessageItem';

function MessageBoard(props) {
	const selectedRoom = props.selectedRoom;
	const messages = props.rooms[selectedRoom].messages;

	return (
		<div className="message-board">
			{renderMessages(messages)}
		</div>
	)
}

function renderMessages(messages) {
	return messages.length
			   ? messages.map(mapMessages)
			   : null
}

function mapMessages(message) {
	return <MessageItem 
		info={message}
		key={message.timestamp + message.user + message.email} />
}

const mapStateToProps = ({selectedRoom, rooms}) => {
  return {selectedRoom, rooms};
};

export default connect(mapStateToProps)(MessageBoard);