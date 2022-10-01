import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {configureStore} from '@redux/toolkit'
// 
import {Provider} from 'react-redux'
import rootReducer from './service/reducers/index'

const store = configureStore({
  reducer: rootReducer
})

// 
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

