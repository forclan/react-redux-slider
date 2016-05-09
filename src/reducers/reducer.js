import {
  IMG_CLICK,
  IMG_MOUSE_OVER,
  IMG_MOUSE_LEAVE,
  IMG_NEXT,
  IMG_PREVIOUS,
  AUTO_SWITCH,
  SELECTET_SLIDER,
  SET_SWITCH_FLAG,
  SET_SWITCH_TIME,
} from '../actions/sliderActions';
import urls from './urls';
import {
  combineReducers
} from 'redux';

function switchReducer(state = {
  switchFlag: true,
  switchTime: 1
}, action) {
  switch (action.type) {
    case SET_SWITCH_FLAG:
      return {
        switchFlag: action.switchFlag,
        switchTime: state.switchTime
      };
    case SET_SWITCH_TIME:
      return {
        switchFlag: state.switchFlag,
        switchTime: action.switchTime,
      }
    case IMG_MOUSE_OVER:
      return {
        switchFlag: false,
        switchTime: state.switchTime,
      }
    case IMG_MOUSE_LEAVE:
      return {
        switchFlag: true,
        switchTime: state.switchTime,
      }
    default:
      return state;
  }
}

function imgReducer(state = {
  urls: urls,
  index: 0,
  width: 400,
  height: 400
}, action) {
  let len = state.urls.length;
  switch (action.type) {
    case IMG_CLICK:
      return {
        urls: state.urls,
        index: action.index,
        width: state.width,
        height: state.height,
      };
    case IMG_NEXT:
      return {
        urls: state.urls,
        index: state.index + 1 > len - 1 ? 0 : state.index + 1,
        width: state.width,
        height: state.height,
        // index: state.index + 1
      }
    case IMG_PREVIOUS:
      let nextIdx = state.index - 1;
      return {
        urls: state.urls,
        index: nextIdx < 0 ? len - 1 : nextIdx,
        width: state.width,
        height: state.height,
      }
    case AUTO_SWITCH:
      return {
        urls: state.urls,
        index: state.index + 1 > len - 1 ? 0 : state.index + 1,
        width: state.width,
        height: state.height,
      }
    case SELECTET_SLIDER:
      return {
        urls: state.urls,
        index: action.index,
        width: state.width,
        height: state.height,
      }
    default:
      return state;
  }
}


export default combineReducers({
  imgReducer,
  switchReducer,
})