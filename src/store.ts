import { createStore, applyMiddleware } from 'redux';
import { rootReducers } from './reducers';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});

export const reduxStore = createStore(
  rootReducers,
  composeEnhancers(
    applyMiddleware(sagaMiddleware),
  )
  // @ts-ignore
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

sagaMiddleware.run(rootSaga);
