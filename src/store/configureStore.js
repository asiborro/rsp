/* eslint-disable import/no-extraneous-dependencies */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  (typeof window === 'object' &&
    process.env.NODE_ENV === 'development' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
/* eslint-enable */

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const devMiddlewares =
    process.env.NODE_ENV === 'development'
      ? [
        createLogger({
          collapsed: (getState, action) =>
            typeof action === 'object' && action.type.startsWith('@@')
        })
      ]
      : [];

  const enhancers = composeEnhancers(
    applyMiddleware(
      sagaMiddleware,
      ...devMiddlewares
    )
  );

  const store = createStore(rootReducer, initialState, enhancers);

  sagaMiddleware.run(rootSaga);

  return store;
}
