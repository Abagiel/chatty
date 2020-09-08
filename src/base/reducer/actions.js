import { 
	SEND_TEXT, 
	CHANGE_ROOM, 
	REGISTER,
	LOGIN,
	LOGOUT,
	CREATE_ROOM,
	DELETE_ROOM,
	DELETE_NOTIFICATOR,
	ADD_NOTIFICATOR } from './types';

import { getTime } from '../utils';

export function sendText(data) {
	return {
		type: SEND_TEXT,
		data: {
			...data,
			date: getTime(),
			timestamp: Date.now()
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
		data: {
			...data,
			time: Date.now()
		}
	}
}

export function login(data) {
	return {
		type: LOGIN,
		data: {
			...data,
			time: Date.now()
		}
	}
}

export function logout(data) {
	return {
		type: LOGOUT,
		data: {
			...data,
			time: Date.now()
		}
	}
}

export function createRoom(data) {
	return {
		type: CREATE_ROOM,
		data: {
			...data,
			time: Date.now()
		}
	}
}

export function deleteRoom(data) {
	return {
		type: DELETE_ROOM,
		data,
		time: Date.now()
	}
}

export function deleteNotify(data) {
	return {
		type: DELETE_NOTIFICATOR,
		data
	}
}

export function addNotify(data) {
	return {
		type: ADD_NOTIFICATOR,
		data: {
			...data,
			time: Date.now()
		}
	}
}