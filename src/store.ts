import { createStore, applyMiddleware } from 'redux';
import { rootReducers } from './reducers';

export const configureStore = () => {
  return createStore(
    rootReducers,
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
};
