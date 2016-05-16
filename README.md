# README

## install
```
npm install react-redux-slider
```


## usage
```
import React, { Component, PropTypes } from 'react';
import Slider from 'react-redux-slider';
import {
  render
} from 'react-dom';
import urls from './urls';
let rootElemet = document.getElementById('root');

render( 
  <Slider urls={urls} />, rootElemet
)
```