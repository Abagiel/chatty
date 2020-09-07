import React from 'react';

export function Backdrop(props) {
	return <div 
		onClick={() => props.setView(false)} 
		className="backdrop"></div>
}