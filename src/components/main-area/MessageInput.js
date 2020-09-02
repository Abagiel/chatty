import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { sendText } from '../../base/reducer/actions';
import { preventDefault } from '../../base/utils';

import { svgs } from '../../base/constants';

class MessageInput extends Component  {
	constructor(props) {
		super();
		this.props = props;
	}

	render() {
		return (
			<form className="message-form" onSubmit={this.formSubmitHandler}>
				<input className="message-input" type="text" />
				{svgs.addPhoto}
				<button className="btn-send"></button>
			</form>
		)
	}

 	formSubmitHandler = (e) => {
		preventDefault(e);
		const text = e.target.querySelector('input').value;
		const data = {
			message: {
				user: this.props.currentUser.name,
				email: this.props.currentUser.email,
				text
			}
		};

		this.props.onSendText(data);
	}
}


function mapStateToProps(state) {
	return state;
}

function mapDispatchToProps(dispatch) {
	 return bindActionCreators({
    onSendText: sendText
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageInput);