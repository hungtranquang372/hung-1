import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import myReducer from './reducers/index'
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
var store= createStore(myReducer,applyMiddleware(thunk))

ReactDOM.render(
   <Provider store={store}>
        <Router>
        <App />
    </Router>
   </Provider>
    , document.getElementById('root'));


serviceWorker.unregister();
