import React, { Component } from 'react';
import SliderImg from './components/Slider/SliderImg';
import { reducer } from './reducers/reducer';
import { createStore, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from './actions/sliderActions';

function mapStateToProps(state) {
  let urlFromState = state.urls[state.index].url;
  return {
    url: urlFromState ? urlFromState : ''
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

class App extends Component {
  componentDidMount() {
      setInterval(() => {
      // console.log('interval');
      // console.log(Date.now());
      this.props.autoSwitch();
    }, 2000);
  }
  render() {
    // console.log('app render');
    let {url, imgClick, imgNext, imgPrevious, autoSwitch} = this.props;
    // this.props.autoSwitch = autoSwitch;
    // console.log('props autoSwitch', this.props.autoSwitch);
    return (
      <div>
        <ul>
          <SliderImg src={url} width={400} height={300} onClick={imgClick} />
        </ul>
        <button onClick={imgPrevious}>
          preImg
        </button>
        <button onClick={imgNext}>
          nextImg
        </button>
      </div>
    );
  }
}
App.defaultProps = {
  intervalHandle: null,
  autoSwitch: null
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
