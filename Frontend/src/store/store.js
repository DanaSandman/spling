import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { mediaReducer } from './reducer.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  mediaModule: mediaReducer,
  });

  export const store = createStore(rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  