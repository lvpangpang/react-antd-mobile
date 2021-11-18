import * as React from 'react';
import { useState } from 'react';

import './index.less';


function Input(props) {
  const {
    className='',
    placeholder,
    type='text',
    value,
    disabled,
    maxLength,
    onChange=(val) => {}
  } = props;

  const [myValue, setMyValue] = useState(value);

  const myChange = (e) => {
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
