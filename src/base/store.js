import { createStore } from 'redux';

import { reducer } from './reducer/reducer';
import { storage } from './clients/storage';

import { normalizeInitialState } from './reducer/initialState';


export const store = createStore(reducer, normalizeInitialState(storage('chatty')));