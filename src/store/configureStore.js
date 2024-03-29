import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import beerReducer from './reducers/beers';
import uiReducer from './reducers/ui';

const rootReducer = combineReducers({
  beers: beerReducer, 
  ui: uiReducer
});

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => (
  createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
);

export default configureStore;
