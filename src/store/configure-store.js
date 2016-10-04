import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from './reducer';

const router = routerMiddleware(browserHistory);
const createStoreWithMiddleware = applyMiddleware(router)(createStore);

function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState, window.devToolsExtension && window.devToolsExtension());
}

export default configureStore;
