export const IMG_CLICK = 'IMG_CLICK';
export const IMG_NEXT = 'IMG_NEXT';
export const IMG_PREVIOUS = 'IMG_PREVIOUS';
export const AUTO_SWITCH = 'AUTO_SWITCH';
export const SELECTET_SLIDER = 'SELECTED_SLIDER';
export const SET_SWITCH_FLAG = 'SET_SWITCH_FLAG';


export const imgClick = (index) =>  {
  console.log('imgClicked');
  return {
    type: IMG_CLICK,
    index: index
  }
};

export const imgNext = () => {
  console.log('imgNext Clicked');
  return {
    type: IMG_NEXT
  }
}

export const imgPrevious = () => {
  return {
    type: IMG_PREVIOUS
  }
}

export const autoSwitch = () => {
  // console.log('autoSwitch');
  return {
    type: AUTO_SWITCH
  } 
}

export const selectDot = (idx) => {
  console.log('selectDot', idx);
  return {
    type: SELECTET_SLIDER,
    index: idx
  }
}

export const setSwicthEnable = (enableSwitch) => {
  return {
    type: SET_SWITCH_FLAG,
    switchFlag: enableSwitch,
  }
}

export const setSwicthTime = (time) =>  {
  return {
    type: SET_SWITCH_TIME,
    switchTime: time,
  }
};
