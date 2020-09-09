import React from 'react';
import { connect } from 'react-redux';

import MessageInput from './MessageInput';
import MessageBoard from './MessageBoard';
import { MainWall } from './MainWall';

import './main-area.css';

function MainArea(props) {
	const content = showComponent(props.selectedRoom);

  return (
    <main>
    	<p className='room-title'>{props.selectedRoom}</p>
			{content}	
		</main>
  )
}

function showComponent(option) {
	if (option) {
		return (
			<React.Fragment>
				<MessageBoard/>
				<MessageInput/>
			</React.Fragment>
		)
	} else {
		return <MainWall/>
	}
}

function mapStateToProps({selectedRoom}) {
	return { selectedRoom };
}

export default connect(mapStateToProps)(MainArea)