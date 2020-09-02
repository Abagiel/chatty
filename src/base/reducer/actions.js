import { 
	SEND_TEXT, 
	CHANGE_ROOM, 
	REGISTER,
	LOGIN,
	LOGOUT } from './types';

export function sendText(data) {
	return {
		type: SEND_TEXT,
		data: {
			...data,
			date: Date.now()
		}
	}
}

export function changeRoom(data) {
	return {
		type: CHANGE_ROOM,
		data
	}
}

export function register(data) {
	return {
		type: REGISTER,
		data
	}
}

export function login(data) {
	return {
		type: LOGIN,
		data
	}
}

export function logout(data) {
	return {
		type: LOGOUT,
		data
	}
}