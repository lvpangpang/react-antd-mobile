import React from "react"
import TouchFeedback from "rmc-feedback"
import classnames from "classnames"
import Icon from "../icon/index"
import "./index.less"

declare interface ButtonProps {
  // 按钮是否被🚫
  disabled?: boolean

  // 点击回调的事件
  onClick?: Function

  // loading
  loading?: boolean

  // 主题
  type?: "primary" | "success" | "error" | "warning"

  // 是否行内元素
  inline?: boolean

  children?: any
}

function Button(props: ButtonProps) {
  const {
    children,
    disabled = false,
    onClick = () => {},
    loading = false,
    type = "primary",
    inline,
  } = props

  let isClick = false

  const _onClick = () => {
    if (!disabled && !isClick) {
      isClick = true
      setTimeout(function () {
        isClick = false
      }, 200)
      onClick()
    }
  }

  const activeClassName = classnames({
    "zec-button-active": !disabled,
  })

  const mainClassName = classnames({
    "zec-button-inner": true,
    [`zec-button-${type}`]: true,
    "zec-button-disable": disabled || loading,
  })

  return (
    <div
      style={inline ? { display: "inline-block" } : {}}
      className='zec-button'
      onClick={_onClick}
    >
      <TouchFeedback activeClassName={activeClassName}>
        <div
          className={mainClassName}
        >
          {loading && (
            <span className='loading-right'>
              <Icon type='loading' size='sm' />
            </span>
          )}
          {children}
        </div>
      </TouchFeedback>
    </div>
  )
}

export default Button
