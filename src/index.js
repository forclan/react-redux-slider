import React, { Component, PropTypes } from 'react';
import {render} from 'react-dom';
import App from './App';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers/reducer';
import middleWare from './middleWare/middleWare';
// let finalCreateStore = applyMiddleware(middleWare)(createStore);
// let store = finalCreateStore(reducer);

let store = createStore(reducer, compose(
  applyMiddleware(middleWare),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

let rootElemet = document.getElementById('root');
// console.log('state init', store.getState());
// store.subscribe(()=>{
  // console.log('state is', store.getState());
// })

render(
  <Provider store={store}>
    <App switchTime_s={2}/>
  </Provider>
  , rootElemet
)