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
			<button className="header-btn" onClick={() => setModal("log")}>Login</button>
			<button className="header-btn" onClick={() => setModal("reg")}>Register</button>
		</div>
	)
}