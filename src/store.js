import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducers from './redux/reducers';

// CREATING INITIAL STORE
export default function getStore(initialState = {}) {
  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );

  // IF REDUCERS WERE CHANGED, RELOAD WITH INITIAL STATE
  if (module.hot) {
    module.hot.accept('./redux/reducers', () => {
      const createNextReducer = require('./redux/reducers').default;
      store.replaceReducer(createNextReducer(initialState));
    });
  }

  return store;
}
