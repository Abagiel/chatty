import React from 'react';

import Modal from '../modal/Modal';

import { svgs } from '../../base/constants';

const inputs = [
	{type: 'text', placeholder: 'name', name: 'name', max: 15, focus: true},
	{type: 'password', placeholder: 'password', name:'password'}
];

export function CreateChatModal(props) {
  return (
    <Modal 
				title="Create Room"
				btnText="Create"
				svg={svgs.create}
				inputs={inputs}
				setView={props.setView}
		/>
  )
}