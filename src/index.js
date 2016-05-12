import React, {
  Component,
  PropTypes
} from 'react';
import {
  render
} from 'react-dom';
import App from './App';
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import {
  Provider
} from 'react-redux';
import reducer from './reducers/reducer';
import middleWare from './middleWare/middleWare';
import urls from './reducers/urls';
let store = createStore(reducer, {
  switchReducer: {
    switchFlag: true,
    switchTime: 1,
  },
  imgReducer: {
    urls: urls,
    index: 0,
    width: 400,
    height: 400,
  },
  imgSizeReducer: {
    width: 400,
    height: 300,
  }
}, compose(
  applyMiddleware(middleWare),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

let rootElemet = document.getElementById('root');

render( 
  <Provider store = {
    store
  }>
    <App switchTime_s = {
      3
    }/>
  </Provider>, rootElemet
)