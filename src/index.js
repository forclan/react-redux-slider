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
import urls from './urls';

class Slider extends Component {
  render() {
    let {urls, switchFlag, switchTime, width, height} = this.props;
    let props = this.props;
    if (urls) {
      props.imgReducer.urls = urls;
    }
    if (switchFlag) {
      props.switchReducer.switchFlag = switchFlag;
    }
    if (switchTime) {
      props.switchReducer.switchTime = switchTime;
    }
    if (width) {
      props.imgSizeReducer.width = width;
    }
    if (height) {
      props.imgSizeReducer.height = height;
    }
    let store = createStore(reducer, {
                    switchReducer: this.props.switchReducer,
                    imgReducer: this.props.imgReducer,
                    imgSizeReducer: this.props.imgSizeReducer,
                  }, compose(
                       applyMiddleware(middleWare),
                       window.devToolsExtension ? window.devToolsExtension() : f => f
                ));

    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
Slider.defaultProps = {
  switchReducer: {
    switchFlag: true,
    switchTime: 3,
  },
  imgReducer: {
    urls: [],
    index: 0,
    width: 400,
    height: 400,
  },
  imgSizeReducer: {
    width: window.innerWidth,
    height: window.innerHeight,
  }
}

let rootElemet = document.getElementById('root');

render( 
  <Slider urls={urls} width={width} height={height}/>, rootElemet
)
