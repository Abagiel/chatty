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
      name: 'private room'
    } 
  },
  'users': {}
};

function normalize(state) {
  return { 
    ...defaultState, 
    ...state, 
    selectedRoom: null,
    currentUser: currentUserDefault }
}

export function normalizeInitialState(state) {
  return state ? normalize(state) : JSON.parse(JSON.stringify(defaultState));
}