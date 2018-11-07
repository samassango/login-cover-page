import { applyMiddleware } from 'redux';
import { createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';

const loggerMiddleware = createLogger();

const configureStore = () => {
  const store = createStore(reducer,
    applyMiddleware(thunkMiddleware,
      loggerMiddleware)
  );
  return store;
}

export default configureStore;