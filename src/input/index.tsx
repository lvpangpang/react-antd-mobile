import * as React from 'react';
import { useState } from 'react';

import './index.less';

interface Props {
  className?: string,
  placeholder?: string,
  type?: string,
  value?: string,
  disabled?: boolean,
  maxLength?: number,
  onChange?: (val: any) => void
}

function Input(props: Props) {
  const {
    className='',
    placeholder,
    type='text',
    value,
    disabled,
    maxLength,
    onChange=(val:any) => {}
  } = props;

  const [myValue, setMyValue] = useState(value);

  const myChange = (e:any) => {
    const value = e.target.value;
    setMyValue(value);
    onChange(value);
  }

  return (
    <div className={`zec-input ${className}`}>
      <input 
        className='input'
        placeholder={placeholder}
        type={type}
        maxLength={maxLength}
        value={myValue}
        disabled={disabled}
        onChange={myChange}
      />
    </div>
  );
}

export default Input;
