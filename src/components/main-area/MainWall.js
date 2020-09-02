import React from 'react';

import { svgs } from '../../base/constants';

export function MainWall() {
	return (
		<div className="message-backdrop">
			{svgs.conversationImage}
			<p className="message-backdrop__text">Select some room to begin the conversation!</p>
		</div>
	)
}