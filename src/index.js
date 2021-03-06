import React from 'react';
import ReactDOM from 'react-dom';
import './css/master.css';
import App from 'react/App';

import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from 'redux/reducers/rootReducer';

  
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
