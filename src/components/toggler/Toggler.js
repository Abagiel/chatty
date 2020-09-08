import React from 'react';

import './toggler.css';

export function Toggler() {
	return (
		<React.Fragment>
		<input className='header-toggler' type="checkbox" id="toggler" name="toggler" />
		<label htmlFor="toggler">
			<span></span>
			<span></span>
			<span></span>
		</label>
		</React.Fragment>
	)
}