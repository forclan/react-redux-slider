import React, {
  Component,
  PropTypes
} from 'react';
import style from '../../css/style.scss';

export default class SliderSelect extends Component {
  render() {
    let {
      imgNum,
      selectDot,
      currentIdx,
      mouseOver,
      mouseLeave
    } = this.props;
    let range = Array.apply(null, Array(imgNum)).map((x, i) => {
      return i;
    });
    let dispDots = range.map((x, i) => {
      let dotClass = i === currentIdx ? 'slider-dot-selected' : 'slider-dot';
      return ( < span className = {
          dotClass
        }
        onClick = {
          () => {
            selectDot(i);
          }
        }
        onMouseOver = {
            mouseOver
        }
        onMouseLeave = {
          mouseLeave
        } 
        key = {
          'dot' + i
        } >
        < /span>
      )
    })
    return ( < div className = "slider-dots-wrap" > {
      dispDots
    } < /div>);
  }
};

SliderSelect.defaultProps = {
  imgNum: 0,
  selectDot: null,
  currentIdx: 0
}

SliderSelect.PropTypes = {
  imgNum: PropTypes.number.isRequired,
  selectDot: PropTypes.func.isRequired,
  currentIdx: PropTypes.number.isRequired,
  mouseOver: PropTypes.func,
  mouseLeave: PropTypes.func,
}