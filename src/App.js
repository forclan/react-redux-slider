import React, { Component, PropTypes } from 'react';
import SliderImg from './components/Slider/SliderImg';
import SliderSelect from './components/Slider/SliderSelect';
import { reducer } from './reducers/reducer';
import { createStore, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from './actions/sliderActions';
import style from './css/style.scss';

function mapStateToProps(state) {
  var imgState = state.imgReducer;
  let urlFromState = imgState.urls[imgState.index].url;
  return {
    url: urlFromState ? urlFromState : '',
    urlLength: imgState.urls.length,
    currentIdx: imgState.index,
    autoSwitchFlag: state.switchReducer.switchFlag,
    width: state.imgSizeReducer.width,
    height: state.imgSizeReducer.height,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    // console.log('componentDidMount');
    setInterval(() => {
      if (this.props.autoSwitchFlag) {
        this.props.autoSwitch(); 
      }
    }, this.props.switchTime * 1000);
  }
  render() {
    let {url, imgClick, imgMouseOver, imgMouseLeave, imgNext, imgPrevious, autoSwitch, switchTime, 
      autoSwitchFlag, setSwicthTime,
      width, height,
      selectDot, currentIdx, urlLength} = this.props;
      
    // setSwicthTime according to APP config
    if (switchTime) {
      setSwicthTime(switchTime);
    }
    
    let sliderStyle = {
      width: width,
      height: height,
    }
    
    return (
      <div className="slider" style={sliderStyle}>
        <div>
          <SliderImg imgSrc={url} onClick={imgClick} imgMouseOver={imgMouseOver}
            width={width}
            height={height}
            imgMouseLeave={imgMouseLeave}
            className={'slider-item'}
          />
        </div>
        
        <div className="slider-previous" onClick={imgPrevious} onMouseOver={imgMouseOver} onMouseLeave={imgMouseLeave}>
        </div>
        
        <div className="slider-next" onClick={imgNext} onMouseOver={imgMouseOver} onMouseLeave={imgMouseLeave}>
        </div>
       
        <SliderSelect selectDot={selectDot} currentIdx={currentIdx} imgNum={urlLength} mouseOver={imgMouseOver}
        mouseLeave={imgMouseLeave}/>
      </div>
    );
  }
}

// define default property
App.defaultProps = {
  intervalHandle: null,
  autoSwitch: null,
  autoSwitchFlag: true,
  switchTime: 1,
};

App.propTypes = {
  autoSwitch: PropTypes.func.isRequired,
  imgClick: PropTypes.func.isRequired,
  imgNext: PropTypes.func.isRequired,
  imgPrevious: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  selectDot: PropTypes.func.isRequired,
  currentIdx: PropTypes.number.isRequired,
  urlLength: PropTypes.number.isRequired,
  switchTime: PropTypes.number,
  autoSwitchFlag: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);