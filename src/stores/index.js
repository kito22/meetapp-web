import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';

import reducers from './modules/rootReducer';
import sagas from './modules/rootSaga';
import persistedReducers from './persistReducers';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware];

const store = createStore(persistedReducers(reducers), middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export { store, persistor };
