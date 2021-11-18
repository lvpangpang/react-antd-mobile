import React from 'react';
import TouchFeedback from 'rmc-feedback';
import Icon from '../Icon/index';
import './index.less';

function Button(props) {
  const {
    children,
    className,
    disabled=false,
    onClick=() => {},
    loading=false,
    type='primary',
    inline
  } = props;

  let {
    style={}
  } = props;

  let isClick = false;

  const _onClick = () => {
    if(!disabled) {
      if(!isClick) {
        isClick = true;
        setTimeout(function() {
          isClick = false;
        }, 500);
        onClick();
      }
    }
  };

  if(inline) {
    style = Object.assign({}, style, {'display': 'inline-block'});
  }

  return (
    <div style={style} className={`zec-button ${className || ''}`} onClick={_onClick}>
      <TouchFeedback
        activeClassName={!disabled ? 'zec-button-active' : ''}
      >
        <div className={`zec-button-inner zec-button-${type} ${(disabled || loading) ? 'zec-button-disable': ''}`}>
          {loading === true && <span className='loading-right'><Icon type='loading' size='sm' /></span>}
          {children}
        </div>
      </TouchFeedback>
    </div>
  );
}

export default Button;
