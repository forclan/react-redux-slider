export const IMG_CLICK = 'IMG_CLICK';
export const IMG_NEXT = 'IMG_NEXT';
export const IMG_PREVIOUS = 'IMG_PREVIOUS';
export const AUTO_SWITCH = 'AUTO_SWITCH';
export const SELECTED_SLIDER = 'SELECTED_SLIDER';
export const SET_SWITCH_FLAG = 'SET_SWITCH_FLAG';
export const SET_SWITCH_TIME = 'SET_SWITCH_TIME';
export const IMG_MOUSE_OVER = 'IMG_MOUSE_OVER';
export const IMG_MOUSE_LEAVE = 'IMG_MOUSE_LEAVE';

export const imgClick = (index) =>  {
  return {
    type: IMG_CLICK,
    index: index
  }
};

export const imgMouseOver = () =>  {
  return {
      type: IMG_MOUSE_OVER,
  }
};

export const imgMouseLeave = () =>  {
  return {
    type: IMG_MOUSE_LEAVE,
  }
};



export const imgNext = () => {
  return {
    type: IMG_NEXT
  }
};

export const imgPrevious = () => {
  return {
    type: IMG_PREVIOUS
  }
};

export const autoSwitch = () => {
  return {
    type: AUTO_SWITCH
  } 
};

export const selectDot = (idx) => {
  return {
    type: SELECTED_SLIDER,
    index: idx
  }
};

export const setSwicthEnable = (enableSwitch) => {
  return {
    type: SET_SWITCH_FLAG,
    switchFlag: enableSwitch,
  }
};

export const setSwicthTime = (time) =>  {
  return {
    type: SET_SWITCH_TIME,
    switchTime: time,
  }
};
