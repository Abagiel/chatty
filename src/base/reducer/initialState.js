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
  'openRoom': {
    ...roomDefault
  },
  'privateRoom': {
    ...roomDefault
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