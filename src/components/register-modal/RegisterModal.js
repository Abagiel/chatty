import React from 'react';

import Modal from '../modal/Modal';

import { svgs } from '../../base/constants';

const inputs = [
  { type: 'text', placeholder: 'name' },
  { type: 'password', placeholder: 'password' },
  { type: 'email', placeholder: 'email' }
];

export function RegisterModal(props) {
  return (
    <Modal 
				title="Register"
				btnText="Register"
				svg={svgs.arrowRight}
				inputs={inputs}
				setView={props.setView}
		/>
  )
}