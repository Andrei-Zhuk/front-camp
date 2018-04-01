import React from 'react';
import {hydrate} from 'react-dom';
import Main from 'Main';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import {BrowserRouter} from 'react-router-dom';

import postReducers from 'Reducers';

let store = createStore(postReducers, window.PRELOADED_STATE, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),)
delete window.PRELOADED_STATE;

hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <Main/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
)
