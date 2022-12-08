import React, { useState } from "react"
import classnames from "classnames"
import "./index.less"

interface Props {
  name: string
  onChange: Function
  checked?: boolean
  disabled?: boolean
  color?: string
}

function Switch(props: Props) {
  const {
    checked = false,
    disabled = false,
    color = "#4dd865",
    name,
    onChange = () => {},
  } = props

  const [isChecked, setIsChecked] = useState(checked)

  const classnames1 = classnames({
    switch: true,
    'switch-active': isChecked,
    'switch-disbled': disabled
  })

  return (
    <div className='zec-switch'>
      <div className='zec-name'>{name}</div>
      <div className='zec-content'>
        <div
          style={{ background: isChecked ? color : "" }}
          className={classnames1}
          onClick={() => {
            if (!disabled) {
              setIsChecked(!isChecked)
              onChange(!isChecked)
            }
          }}
        ></div>
      </div>
    </div>
  )
}

export default Switch
