import Slider from '../src/Slider';
import React, { Component, PropTypes } from 'react';
import {
  render
} from 'react-dom';
import urls from './urls';
let rootElemet = document.getElementById('root');

render( 
  <Slider urls={urls} />, rootElemet
)
