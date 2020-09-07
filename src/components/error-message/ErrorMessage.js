import React from 'react';

import { svgs } from '../../base/constants';

import './error-message.css';

export function ErrorMessage() {
	return (
		<div className='error-message'>
			<h1>Something went wrong</h1>
			{svgs.sad}
		</div>
	)
}