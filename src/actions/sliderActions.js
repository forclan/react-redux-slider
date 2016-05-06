export const IMG_CLICK = 'IMG_CLICK';
export const IMG_NEXT = 'IMG_NEXT';
export const IMG_PREVIOUS = 'IMG_PREVIOUS';
export const AUTO_SWITCH = 'AUTO_SWITCH';

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