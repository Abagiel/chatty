import React from 'react';
import { connect } from 'react-redux';

import MessageInput from './MessageInput';
import MessageBoard from './MessageBoard';
import { MainWall } from './MainWall';

import './main-area.css';

function MainArea(props) {
	let content = null;

	if (props.selectedRoom) {
		content = (
			<React.Fragment>
				<MessageBoard/>
				<MessageInput/>
			</React.Fragment>);
	} else {
		content = <MainWall />
	}

  return (
    <main>
			{content}	
		</main>
  )
}

function mapStateToProps({selectedRoom}) {
	return { selectedRoom };
}

export default connect(mapStateToProps)(MainArea)