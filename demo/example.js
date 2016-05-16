import React, { Component, PropTypes } from 'react';
import Slider from '../src/Slider';
import {
  render
} from 'react-dom';
import urls from './urls';
let rootElemet = document.getElementById('root');

render( 
  <Slider urls={urls} />, rootElemet
)