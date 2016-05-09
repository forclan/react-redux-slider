import React, { Component, PropTypes } from 'react';
import SliderImg from './components/Slider/SliderImg';
import SliderSelect from './components/Slider/SliderSelect';
import { reducer } from './reducers/reducer';
import { createStore, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from './actions/sliderActions';
// import style from './css/style';

function mapStateToProps(state) {
  var imgState = state.imgReducer;
  let urlFromState = imgState.urls[imgState.index].url;
  return {
    url: urlFromState ? urlFromState : '',
    urlLength: imgState.urls.length,
    currentIdx: imgState.index,
    autoSwitchFlag: state.switchReducer.switchFlag,
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
    }, this.props.switchTime_s * 1000);
  }
  render() {
    let {url, imgClick, imgMouseOver, imgMouseLeave, imgNext, imgPrevious, autoSwitch, switchTime_s, 
      autoSwitchFlag, setSwicthTime,
      selectDot, currentIdx, urlLength} = this.props;
      
    // setSwicthTime according to APP config
    if (switchTime_s) {
      setSwicthTime(switchTime_s);
    }
    
    return (
      <div>
        <ul>
          <SliderImg imgSrc={url} width={400} height={300} onClick={imgClick} imgMouseOver={imgMouseOver}
            imgMouseLeave={imgMouseLeave}
          />
        </ul>
        
        <button onClick={imgPrevious}>
          preImg
        </button>
        
        <button onClick={imgNext}>
          nextImg
        </button>
       
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
  switchTime_s: 1,
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
  switchTime_s: PropTypes.number,
  autoSwitchFlag: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);