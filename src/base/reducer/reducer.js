import { 
	SEND_TEXT, 
	CHANGE_ROOM,
	REGISTER,
	LOGIN,
	LOGOUT,
	CREATE_ROOM,
	DELETE_ROOM } from './types';

export function reducer(state, action) {
	switch(action.type) {

		case SEND_TEXT:
			const { message, date, timestamp } = action.data;
			const room = state.selectedRoom;
			const changeRoom = state.rooms[room];

			let messages = [];
			if (state) {
				messages = [...changeRoom.messages];
			}

			return {
				...state,
				rooms: {
					...state.rooms,
					[room]: {
						...state.rooms[room],
						messages: [...messages, {...message, date, timestamp}]
					}
				}
			}

			case CHANGE_ROOM:
				return {...state, selectedRoom: action.data}

		case REGISTER: 
			const email = action.data.email;

			if (action.data.name === '' ||
					action.data.email === '' ||
					action.data.password === '' ||
					Object.keys(state.users).includes(action.data.email)) {
				return {...state}
			}
			return {
				...state, 
				users: {
					...state.users,
					[email]: {
						name: action.data.name,
						password: action.data.password,
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

		case CREATE_ROOM:
			if (state.rooms[action.data.key]) {
				return {...state}
			}

			let priv = Boolean(action.data.password);

			return {
				...state,
				rooms: {
					...state.rooms,
					[action.data.key]: {
						messages: [],
						owner: state.currentUser.email,
						name: action.data.value,
						password: action.data.password,
						private: priv
					}
				}
			}

		case DELETE_ROOM:
			const newState = {...state};
			delete newState.rooms[action.data];

			return {
				...state,
				selectedRoom: null,
				rooms: {...newState.rooms}
			} 

		default: return state;
	}
}