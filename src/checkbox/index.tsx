import React from "react"
import classNames from "classnames"
import { useState } from "react"
import "./index.less"

declare interface CheckboxProps {
  children: any
  value: Array<number | string>
  onChange: Function
}

function Checkbox(props: CheckboxProps) {
  const { children, value, onChange = () => {} } = props
  const [checkboxValue, setCheckboxValue] = useState(value)
  return (
    <div className='zec-checkbox-box'>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          children: child.props.children,
          value: child.props.value,
          checkboxValue: checkboxValue,
          disabled: child.props.disabled,
          onClick: () => {
            const cValue = child.props.value
            const newData = [...checkboxValue]
            if (newData.indexOf(cValue) !== -1) {
              newData.splice(checkboxValue.indexOf(cValue), 1)
            } else {
              newData.push(cValue)
            }
            setCheckboxValue(newData)
            onChange(newData)
          },
        })
      })}
    </div>
  )
}

declare interface CheckboxItemProps {
  children: React.ReactNode
  value: string | number
  disabled?: boolean
  checkboxValue?: Array<number | string>
  onClick?: Function
}
function CheckboxItem(props: CheckboxItemProps) {
  const { value, children, checkboxValue, disabled, onClick = () => {} } = props
  const className = classNames({
    "zec-checkbox": true,
    "zec-checkbox-disabled": disabled,
  })
  return (
    <div
      className={className}
      onClick={() => {
        if (!disabled) {
          onClick()
        }
      }}
    >
      <div className='content'>
        <div
          className={`circle ${
            (checkboxValue as any)?.indexOf(value) !== -1 && !disabled
              ? "active"
              : ""
          } `}
        >
          <div className='fork'></div>
        </div>
        <div className='label'>{children}</div>
      </div>
    </div>
  )
}

Checkbox.CheckboxItem = CheckboxItem

export default Checkbox
