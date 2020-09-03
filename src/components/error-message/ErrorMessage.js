import React from 'react';

import { svgs } from '../../base/constants';

export function ErrorMessage() {
	return (
		<div>
			<h1>Something went wrong :(</h1>
			{svgs.clear}
		</div>
	)
}