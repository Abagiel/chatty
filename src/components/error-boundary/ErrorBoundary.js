import React, { Component } from 'react';

import { ErrorMessage } from '../error-message/ErrorMessage';

export class ErrorBoundary extends Component {
	constructor(props) {
		super();
		this.state = {
			isError: false
		}
	}

	componentDidCatch() {
		this.setState({isError: true})
	}

	render() {
		if (this.state.isError) {
			return <ErrorMessage />
		}

		return this.props.children
	}
}