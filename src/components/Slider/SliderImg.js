import React, {
  Component,
  PropTypes
} from 'react';
import style from '../../css/style';
import animate from '../../css/animation'

export default class SliderImg extends Component {
  render() {
    let {
      imgSrc,
      width,
      height,
      className,
      clickImg,
      imgMouseOver,
      imgMouseLeave,
      alt,
    } = this.props;

    return (
      <img
        src={imgSrc}
        width={width}
        alt={alt}
        height={height}
        className={className}
        onClick={clickImg}
        onMouseOver={imgMouseOver}
        onMouseLeave={imgMouseLeave}
      />
    );
  }
};

SliderImg.defaultProps = {};

SliderImg.PropTypes = {
  imgSrc: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  alt: PropTypes.string,
  mouseOver: PropTypes.func,
  mouseLeave: PropTypes.func,
};