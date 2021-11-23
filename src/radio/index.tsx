import React from 'react';
import { useState } from 'react';
import './index.less';

interface RadioProps {
  children: any,
  value: number | string,
  onChange: Function
}

interface RadioItemProps {
  value: number | string,
  label: string,
  radioValue: any,
  disabled?: boolean,
  onClick: Function
}

function Radio(props: RadioProps) {
  const {
    children,
    value,
    onChange = () => {}
  } = props;

  const [radioValue, setRadioValue] = useState(value);
  return (
    <div>
      {
        React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            label: child.props.children,
            value: child.props.value,
            radioValue: radioValue,
            disabled: child.props.disabled,
            onClick: () => {
              const cValue = child.props.value;
              setRadioValue(cValue)
              onChange(cValue)
            }
          });
        })
      }
    </div>
  );
}

function RadioItem(props: RadioItemProps) {
  const {
    value,
    label,
    radioValue,
    disabled,
    onClick
  } = props; 

  return(
    <div className={`zec-radio ${disabled ? 'zec-radio-disabled': ''}`} onClick={() => {if(!disabled) {onClick(value)}}}>
      <div className="content">
        <div className={`circle ${(radioValue === value && !disabled) ? 'active' : ''} `}>
          <div className="fork"></div>
        </div>
        <div className="label">{label}</div>
      </div>
  </div>
  );
}

Radio.RadioItem = RadioItem;

export default Radio;
