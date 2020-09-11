import {
  SEND_TEXT,
  CHANGE_ROOM,
  REGISTER,
  LOGIN,
  LOGOUT,
  CREATE_ROOM,
  DELETE_ROOM,
  DELETE_NOTIFICATOR,
  ADD_NOTIFICATOR
} from './types';

export function reducer(state, action) {
  switch (action.type) {

    case SEND_TEXT:
      return sendTextReducer(state, action);

    case REGISTER:
      return registerReducer(state, action);

    case LOGIN:
      return loginReducer(state, action);

    case LOGOUT:
      return logoutReducer(state, action);

    case CREATE_ROOM:
      return createRoomReducer(state, action);

    case DELETE_ROOM:
      return deleteRoomReducer(state, action);

    case CHANGE_ROOM:
      return changeRoomReducer(state, action);

    case DELETE_NOTIFICATOR:
      return deleteNotificatorReducer(state, action);

    case ADD_NOTIFICATOR:
      return addNotificatorReducer(state, action);

    default:
      return state;
  }
}


function sendTextReducer(state, action) {
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
        messages: [...messages, { ...message, date, timestamp }]
      }
    }
  }
}

function registerReducer(state, action) {
  const email = action.data.email;
  const usersArr = Object.keys(state.users);

  if (!action.data.name ||
    !action.data.email ||
    !action.data.password ||
    usersArr.includes(action.data.email)) {
    return {
      ...state,
      notificator: {
        time: action.data.time,
        messages: [
          ...state.notificator.messages,
          {
            text: 'Something went wrong',
            type: 'danger',
            time: action.data.time
          }
        ]
      }
    }
  }

  return {
    ...state,
    users: {
      ...state.users,
      [email]: {
        name: action.data.name,
        password: action.data.password,
      }
    },
    notificator: {
      time: action.data.time,
      messages: [
        ...state.notificator.messages,
        {
          text: 'You successufully created account!',
          type: 'success',
          time: action.data.time
        }
      ]
    }
  }
}

function loginReducer(state, action) {
  const email = action.data.email;
  const password = action.data.password;

  if (state.users[email] &&
    state.users[email].password === password) {
    return {
      ...state,
      currentUser: {
        name: state.users[email].name,
        email
      },
      notificator: {
        time: action.data.time,
        messages: [
          ...state.notificator.messages,
          {
            text: 'Welcome!',
            type: 'success',
            time: action.data.time
          }
        ]
      }
    }
  }
  return {
    ...state,
    notificator: {
      time: action.data.time,
      messages: [
        ...state.notificator.messages,
        {
          text: 'Log In is failed!',
          type: 'danger',
          time: action.data.time
        }
      ]
    }
  }
}

function logoutReducer(state, action) {
  return {
    ...state,
    currentUser: {
      name: 'Guest',
      email: null
    },
    selectedRoom: null,
    notificator: {
      time: action.data.time,
      messages: [
        ...state.notificator.messages,
        {
          text: 'Goodbye!',
          type: 'success',
          time: action.data.time
        }
      ]
    }
  }
}

function createRoomReducer(state, action) {
  if (state.rooms[action.data.key]) {
    return {
      ...state,
      notificator: {
        time: action.data.time,
        messages: [
          ...state.notificator.messages,
          {
            text: 'The chat room is existing!',
            type: 'warning',
            time: action.data.time
          }
        ]
      }
    }
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
    },
    notificator: {
      time: action.data.time,
      messages: [
        ...state.notificator.messages,
        {
          text: 'You created new chat room!',
          type: 'success',
          time: action.data.time
        }
      ]
    }
  }
}

function deleteRoomReducer(state, action) {
  const newState = { ...state };
  delete newState.rooms[action.data];

  return {
    ...state,
    selectedRoom: null,
    rooms: { ...newState.rooms },
    notificator: {
      time: action.time,
      messages: [
        ...state.notificator.messages,
        {
          text: 'You deleted chat room!',
          type: 'danger',
          time: action.time
        }
      ]
    }
  }
}

function changeRoomReducer(state, action) {
  return { ...state, selectedRoom: action.data }
}

function deleteNotificatorReducer(state, action) {
  const newNotiMessages = state.notificator.messages
    .filter(message => message.time !== action.data);
  return {
    ...state,
    notificator: {
      time: '',
      messages: [...newNotiMessages]
    }
  }
}

function addNotificatorReducer(state, action) {
  return {
    ...state,
    notificator: {
      time: action.data.time,
      messages: [
        ...state.notificator.messages,
        {
          text: action.data.text,
          type: action.data.type,
          time: action.data.time
        }
      ]
    }
  }
}