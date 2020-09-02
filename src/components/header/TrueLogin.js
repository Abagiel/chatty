import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { logout } from '../../base/reducer/actions';

import { svgs } from '../../base/constants';

function TrueLogin(props) {
	return (
		<div className="header-user">
			U
			<div className="header-user__menu">
				<div>
					<button className="header-user__btn">Create chat</button>
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

function mapStateToProps(state) {
	return {};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		onLogout: logout
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TrueLogin);