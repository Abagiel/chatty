import React from 'react';
import { connect } from 'react-redux';

import TrueLogin from './TrueLogin';
import { FalseLogin } from './FalseLogin';

import './header.css';

function Header(props) {
	let content = props.email 
		? <TrueLogin/> 
		: <FalseLogin/>;
		 
	return (
		<header>
			{content}
		</header>
	)
}

function mapStateToProps({currentUser}) {
	return currentUser;
}

export default connect(mapStateToProps)(Header);