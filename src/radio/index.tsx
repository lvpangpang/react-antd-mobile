import React from "react"
import { useState } from "react"
import "./index.less"

interface RadioProps {
  children: any
  value: number | string
  onChange: Function
}

function Radio(props: RadioProps) {
  const { children, value, onChange = () => {} } = props
  const [radioValue, setRadioValue] = useState(value)
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          children: child.props.children,
          value: child.props.value,
          disabled: child.props.disabled,
          radioValue: radioValue,
          onClick: () => {
            const cValue = child.props.value
            setRadioValue(cValue)
            onChange(cValue)
          },
        })
      })}
    </div>
  )
}

interface RadioItemProps {
  children: React.ReactNode
  value: number | string
  disabled?: boolean
  radioValue?: number | string
  onClick?: Function
}
function RadioItem(props: RadioItemProps) {
  const { value, children, disabled, radioValue, onClick = () => {} } = props

  return (
    <div
      className={`zec-radio ${disabled ? "zec-radio-disabled" : ""}`}
      onClick={() => {
        if (!disabled) {
          onClick(value)
        }
      }}
    >
      <div className='content'>
        <div
          className={`circle ${
            radioValue === value && !disabled ? "active" : ""
          } `}
        >
          <div className='fork'></div>
        </div>
        <div className='label'>{children}</div>
      </div>
    </div>
  )
}

Radio.RadioItem = RadioItem

export default Radio
