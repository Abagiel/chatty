import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import { ErrorBoundary } from './components/error-boundary/ErrorBoundary';

import { store } from './base/store';
import { LocalStorageClient } from './base/clients/LocalStorageClient';

import './index.css';

const lcc = new LocalStorageClient('chatty');

store.subscribe(() => {
	lcc.save(store.getState());
});
store.dispatch({type: '__INIT__'});

ReactDom.render(
	<Provider store={store}>
		<ErrorBoundary>
			<App/>
		</ErrorBoundary>
	</Provider>,
	document.querySelector('#root')
)