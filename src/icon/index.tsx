import * as React from 'react';
import svgSprite from './svg';
import './index.less';

interface Props {
  type: string,
  size?: 'xs' | 'sm' | 'md' | 'lg',
  color?: string 
}

function Icon(props: Props) {
  
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
