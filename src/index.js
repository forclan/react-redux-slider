import React, { Component, PropTypes } from 'react';
import {render} from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers/reducer';

let store = createStore(reducer);

let rootElemet = document.getElementById('root');
console.log('state init', store.getState());
store.subscribe(()=>{
  console.log('state is', store.getState());
})
render(
  <Provider store={store}>
    <App />
  </Provider>
  , rootElemet
)