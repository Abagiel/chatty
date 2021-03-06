import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { sendText } from '../../base/reducer/actions';
import { preventDefault } from '../../base/utils';

class MessageInput extends Component  {
	constructor(props) {
		super();
		this.state = {
			text: ''
		};

		this.textInput = React.createRef();
	}

	render() {
		return (
			<form 
				className="message-form" 
				onSubmit={this.formSubmitHandler}>
				<input 
					className="message-input" 
					type="text"
					value={this.state.text} 
					ref={this.textInput} 
					onChange={this.inputHandler}
					/>
				<button className="btn-send"></button>
			</form>
		)
	}

	componentDidMount() {
		this.focusText();
		this.scrollToEnd();
	}

	componentDidUpdate() {
		this.focusText();
		this.scrollToEnd();
	}

	scrollToEnd() {
		const target = document.querySelector('.message-board');
		target.scrollTo(0, target.scrollHeight);
	}

	focusText() {
		this.textInput.current.focus();
	}

	clearText() {
		this.setState({text: ''});
	}

	inputHandler = (e) => {
		this.setState({text: e.target.value})
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

		if (this.props.currentUser.email === null) {
			data.message.user += this.props.sessionId
		}

		this.props.onSendText(data);
		this.clearText();
		this.focusText();
	}
}


function mapStateToProps({currentUser, sessionId, selectedRoom}) {
	return {currentUser, sessionId, selectedRoom};
}

function mapDispatchToProps(dispatch) {
	 return bindActionCreators({
    onSendText: sendText
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageInput);