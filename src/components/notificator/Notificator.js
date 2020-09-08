import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { deleteNotify } from '../../base/reducer/actions';
import { timeTillRemove } from '../../base/constants';

import './notificator.css';

function Notificator(props) {
  if (props.messages.length < 1) return <div></div>
  	
  removeMessage(props.onDeleteNotify, props.time);

  return (
  	<div className="notificator">
  		{props.messages.map(createMessage)}
  	</div>
  )
}

function createMessage(message) {
	const clas = `notificator-message ${message.type}`;
	return <div key={message.time} className={clas}>{message.text}</div>
}

function removeMessage(func, time) {
	setTimeout(() => func(time), timeTillRemove);
}

function mapStateToProps({notificator}) {
	return notificator;
}

function mapDispatchToProps(dispatch) {
	 return bindActionCreators({
    onDeleteNotify: deleteNotify
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Notificator);