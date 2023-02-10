/* import { createStore, applyMiddleware } from 'redux'; */
/* import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store */


import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './redurcer/reducers';



export const store = createStore(
   rootReducer,
   composeWithDevTools(applyMiddleware(thunk)),
);