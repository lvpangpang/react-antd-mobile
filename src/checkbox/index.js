import React from 'react';
import { useState } from 'react';
import './index.less';

function Checkbox(props) {
  const {
    children,
    value,
    onChange = () => {}
  } = props;

  const [checkboxValue, setCheckboxValue] = useState(value);
  return (
    <div className='zec-checkbox-box'>
      {
        React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            label: child.props.children,
            value: child.props.value,
            checkboxValue: checkboxValue,
            disabled: child.props.disabled,
            onClick: () => {
              const cValue = child.props.value;
              const newData = [...checkboxValue];
              if(newData.indexOf(cValue) !== -1) {
                newData.splice(checkboxValue.indexOf(cValue), 1);
              } else {
                newData.push(cValue);
              }
              setCheckboxValue(newData);
              onChange(newData);
            }
          });
        })
      }
    </div>
  );
}

function CheckboxItem(props) {
  const {
    value,
    label,
    checkboxValue,
    disabled,
    onClick
  } = props; 

  return(
    <div className={`zec-checkbox ${disabled ? 'zec-checkbox-disabled': ''}`} onClick={() => {if(!disabled) {onClick()}}}>
      <div className="content">
        <div className={`circle ${(checkboxValue.indexOf(value) !== -1 && !disabled) ? 'active' : ''} `}>
          <div className="fork"></div>
        </div>
        <div className="label">{label}</div>
      </div>
  </div>
  );
}

Checkbox.CheckboxItem = CheckboxItem;

export default Checkbox;  
