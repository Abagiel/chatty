import { 
	SEND_TEXT, 
	CHANGE_ROOM,
	REGISTER,
	LOGIN,
	LOGOUT } from './types';

export function reducer(state, action) {
	switch(action.type) {

		case SEND_TEXT:
			const { message, date } = action.data;
			const room = state.selectedRoom;
			const changeRoom = state[room];

			let messages = [];
			if (state) {
				messages = [...changeRoom.messages];
			}

			return {
				...state,
				[room]: {
					...state[room],
					messages: [...messages, {...message, date}]
				}
			}

			case CHANGE_ROOM:
				return {...state, selectedRoom: action.data}

		case REGISTER: 
			const email = action.data.email;

			if (action.data.name === '' ||
					action.data.email === '' ||
					action.data.password === '') {
				return {...state}
			}
			return {
				...state, 
				users: {
					...state.users,
					[email]: {
						name: action.data.name,
						password: action.data.password
					}
				}}

		case LOGIN:
			const mail = action.data.email;
			const password = action.data.password;
			if (state.users[mail] &&
					state.users[mail].password === password) {
				return {
					...state,
					currentUser: {
						name: state.users[mail].name,
						email: mail
					}
				}
			}
			return {
				...state
			}

		case LOGOUT:
			return {
				...state,
				currentUser: {
					name: 'Guest',
					email: null
				},
				selectedRoom: null
			}

		default: return state;
	}
}