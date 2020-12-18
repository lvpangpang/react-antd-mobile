import * as React from 'react';
import TouchFeedback from 'rmc-feedback';
import Icon from '../icon/index';
import './index.less';

interface Props {

  children: any

  // 样式
  className?: string,

  // 按钮是否被🚫
  disabled?: boolean,

  // 点击回调的事件
  onClick?: Function,
  
  // loading
  loading?: boolean,

  // 主题
  type?: 'primary' | 'success' | 'error' | 'warning',

  // 样式
  style?: string,

  inline: boolean
}

function Button(props: Props) {
  
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
