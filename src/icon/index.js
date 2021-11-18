import * as React from 'react';
import svgSprite from './svg';
import './index.less';

function Icon(props) {
  const {
    type,
    size='md',
    color
  } = props;

  return (
    <div className='zec-icon'>
      <div className={`zec-icon-${size}`} dangerouslySetInnerHTML={{ __html: svgSprite(type)}}></div>
    </div>
  );
}

export default Icon;
