import React, { useState } from 'react';

import { RegisterModal } from '../register-modal/RegisterModal';
import { LoginModal } from '../login-modal/LoginModal';

export function FalseLogin() {
	const [isModal, setModal] = useState(false);

	const modal = isModal === 'reg' 
		? <RegisterModal setView={setModal}/> 
		: isModal === 'log'
		? <LoginModal setView={setModal} />
		: null;

	return (
		<div className="header-btn__container">
			{modal}
			{createHeaderBtn('Login', setModal, 'log')}
			{createHeaderBtn('Register', setModal, 'reg')}
		</div>
	)
}

function createHeaderBtn(text, func, arg) {
	return <button 
				   className="header-btn" 
				   onClick={() => func(arg)}>
				   {text}
				 </button>
}