import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import App from './App';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={store}>
    <App dispatch={store.dispatch} />
  </Provider>,
  document.getElementById('root')
);