const currentUserDefault = {
  name: 'Guest',
  email: null,
};
const roomDefault = {
  messages: [],
  private: false,
  owner: 'site'
};

const defaultState = {
  'sessionId': Date.now(),
  'selectedRoom': null,
  'currentUser': {
    ...currentUserDefault
  },
  'rooms': {
    'OpenRoom': {
      ...roomDefault,
      name: 'open room'
    },
    'PrivateRoom': {
      ...roomDefault,
      name: 'private room',
      private: true
    } 
  },
  'users': {}, 
  'notificator': {
    'text': '', 
    'type': '',
    'messages': []
  }
};

function normalize(state) {
  return { 
    ...defaultState, 
    ...state, 
    selectedRoom: null,
    currentUser: currentUserDefault,
    sessionId: Date.now(),
    notificator: {
      text: '',
      type: '',
      time: '',
      messages: []
    } 
  }
}

export function normalizeInitialState(state) {
  return state ? normalize(state) : JSON.parse(JSON.stringify(defaultState));
}