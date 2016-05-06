import {
  IMG_CLICK,
  IMG_NEXT,
  IMG_PREVIOUS,
  AUTO_SWITCH,
} from '../actions/sliderActions';
import urls from './urls';

export default function imgReduce(state = {
  urls: urls,
  index: 0,
  width: 400,
  height: 400
}, action) {
  // console.log('action is', action.type);
  let len = state.urls.length;
  switch (action.type) {
    case IMG_CLICK:
      return {
        urls: state.urls,
        index: action.index
      };
    case IMG_NEXT:
      return {
        urls: state.urls,
        index: state.index + 1 > len - 1 ? 0 : state.index + 1,
        // index: state.index + 1
      }
    case IMG_PREVIOUS:
      let nextIdx = state.index - 1;
      return {
        urls: state.urls,
        index: nextIdx < 0 ? len - 1 : nextIdx
      }
    case AUTO_SWITCH:
      return {
        urls: state.urls,
        index: state.index + 1 > len - 1 ? 0 : state.index + 1
      }
    default:
      return state;
  }
}