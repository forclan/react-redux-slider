import React, { Component, PropTypes } from 'react';
import SliderImg from './components/Slider/SliderImg';
import SliderSelect from './components/Slider/SliderSelect';
import { reducer } from './reducers/reducer';
import { createStore, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from './actions/sliderActions';
// import style from './css/style';

function mapStateToProps(state) {
  let urlFromState = state.urls[state.index].url;
  return {
    url: urlFromState ? urlFromState : '',
    urlLength: state.urls.length,
    currentIdx: state.index,
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
    }, this.props.switchTime_s * 1000);
  }
  render() {
    console.log('app render');
    let {url, imgClick, imgNext, imgPrevious, autoSwitch, switchTime_s, 
      selectDot, currentIdx, urlLength} = this.props;
    console.log('receive currentIdx', currentIdx);  
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
        <SliderSelect selectDot={selectDot} currentIdx={currentIdx} imgNum={urlLength} />
      </div>
    );
  }
}

// define default properity
App.defaultProps = {
  intervalHandle: null,
  autoSwitch: null,
  switchTime_s: 1,
}

App.propTypes = {
  autoSwitch: PropTypes.func.isRequired,
  imgClick: PropTypes.func.isRequired,
  imgNext: PropTypes.func.isRequired,
  imgPrevious: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  selectDot: PropTypes.func.isRequired,
  currentIdx: PropTypes.number.isRequired,
  urlLength: PropTypes.number.isRequired,
  switchTime_s: PropTypes.number,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);