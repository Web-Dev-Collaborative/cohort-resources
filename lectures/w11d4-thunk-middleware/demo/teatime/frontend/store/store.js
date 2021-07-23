import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { myMiddleware, myThunk} from './middleware';

// most basic possible store - no reducer
// const store = createStore(() => ({}), preloadedState);

// second most basic - takes in preloaded state - we will replace anon func with a reducer later
// const configureStore = (preloadedState = {}) => {
//   return createStore(() => ({}), preloadedState);
// }

// getting less basic, using teasReducer as rootReducer (its the only reducer right now)
const configureStore = (preloadedState = {}) => {
  return createStore(rootReducer, preloadedState, applyMiddleware(myThunk, logger));
}

export default configureStore;