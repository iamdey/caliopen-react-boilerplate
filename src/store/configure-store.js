import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';

// const createStoreWithMiddleware = applyMiddleware()(createStore);

function configureStore(initialState) {
  return createStore(rootReducer, initialState, window.devToolsExtension && window.devToolsExtension());
}

export default configureStore;
