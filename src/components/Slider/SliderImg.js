import React, {
  Component,
  PropTypes
} from 'react';
import style from '../../css/style.css';

export default class SliderImg extends Component {
  render() {
    let {
      src,
      width,
      height,
      className,
      clickImg,
      alt
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
      /> < /li>
    );
  }
};

SliderImg.PropTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  heigth: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  alt: PropTypes.string,
};