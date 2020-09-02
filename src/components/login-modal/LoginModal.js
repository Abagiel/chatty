import React from 'react';

import Modal from '../modal/Modal';

import { svgs } from '../../base/constants';

const inputs = [
  { type: 'email', placeholder: 'email' },
  { type: 'password', placeholder: 'password' }
];

export function LoginModal(props) {
  return (
    <Modal 
			title="Log In"
			btnText="Log In"
			svg={svgs.login}
			inputs={inputs}
			setView={props.setView}
		/>
  )
}