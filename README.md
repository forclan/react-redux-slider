# README

## install
```
npm install react-redux-slider
```


## usage
```
import React from 'react';
import Slider from 'react-redux-slider';
import {
  render
} from 'react-dom';
import urls from './urls';
let rootElemet = document.getElementById('root');
let urls = [{
  url: 'https://static.pexels.com/photos/479/landscape-nature-sunset-trees-large.jpg'
}, {
  url: 'https://static.pexels.com/photos/2946/dawn-nature-sunset-trees-large.jpg'
}, {
  url: 'https://static.pexels.com/photos/34066/pexels-photo-large.jpg'
}, {
  url: 'https://static.pexels.com/photos/89290/pexels-photo-89290-large.jpeg'
}];

render( 
  <Slider urls={urls} />, rootElemet
)
```

## demo
[demo](http://forclan.github.io/React/Slider/)

## attributes 
you can use it as 
```
<Slider *props* />
```
*props* can be 
* urls: image urls in a array
```
<Slider urls={[{url: *href1*}, {url: *href2}}]} />
```
* width/height: the image display size, defalut value is window.innerWidth/height
```
<Slider width={400} height={400} />
```
will set Slider width & height to 400px
* switchFlag: auto change image or not. defalut value is true(change image)
* switchTime: change image every N seconds. default value is 3s


## TODO
add animation
