import * as React from 'react';
import { useState } from 'react';
import './index.less';

interface Props {
  checked: boolean,
  disabled?: boolean,
  color?: string,
  name: string,
  onChange?: (checked: boolean) => {}
}

function Switch(props: Props) {

  const {
    checked= false,
    disabled=false,
    color='#4dd865',
    name,
    onChange=() => {}
  } = props;

  const [isChecked, setIsChecked] = useState(checked);

  return (
    <div className='zec-switch'>
     <div className='zec-name'>{name}</div>
     <div className='zec-content'>
       <div style={{background: isChecked ? color : ''}} className={`switch ${isChecked ? 'switch-active' : ''} ${disabled ? 
       'switch-disbled' : ''}`} onClick={() => {
         if(!disabled) {
          setIsChecked(!isChecked);
          onChange(!isChecked);
         }
       }}></div>
     </div>
    </div>
  );
}

export default Switch;
