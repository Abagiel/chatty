import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeRoom } from '../../base/reducer/actions';

import Chat from './Chat';

import { svgs } from '../../base/constants';

export function Chats(props) {
	return (
		<div className="side-menu__chats">
			<h3 className="border-b">{props.title}</h3>
			<Chat 
				svg={svgs.lockOpen} 
				title="open room"
				changeRoom={props.onChangeRoom}/>

			<Chat 
				svg={svgs.lockClose} 
				title="private room"
				changeRoom={props.onChangeRoom}/>
		</div>
	)
}

function mapStateToProps(state) {
	return state;
}

function mapDispatchToProps(dispatch) {
	 return bindActionCreators({
    onChangeRoom: changeRoom
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Chats);