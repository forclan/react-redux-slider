import React, {
  Component,
  PropTypes
} from 'react';
import style from '../../css/style.scss';

export default class SliderImg extends Component {
  render() {
    let {
      src,
      width,
      height,
      className,
      clickImg,
      imgMouseOver,
      imgMouseLeave,
      alt,
    } = this.props;
    return ( < li >
      < img src = {
        src
      }
      width = {
        width
      }
      height = {
        height
      }
      className = {
        className
      }
      onClick = {
        clickImg
      }
      onMouseOver = {
        imgMouseOver
      }
      onMouseLeave = {
        imgMouseLeave
      }
      /> < /li >
    );
  }
};

SliderImg.defaultProps = {
  onClick: null,
  mouseLeave: null,
  mouseOver: null,
};

SliderImg.PropTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  heigth: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  alt: PropTypes.string,
  mouseOver: PropTypes.func,
  mouseLeave: PropTypes.func,
};