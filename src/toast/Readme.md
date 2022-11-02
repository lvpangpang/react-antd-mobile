# Toast

## API

| 属性     | 说明                     | 类型                    | 默认值 |
| -------- | ------------------------ | ----------------------- | ------ |
| content  | 提示内容                 | React.Element or string |        |
| duration | 自动关闭的延迟，单位毫秒 | number                  | 3000   |

## DEMOS

```jsx
import React from "react"
import { Button, Toast } from "react-antd-mobile"

function ToastDome() {
  return (
    <>
      <Button
        onClick={() => {
          Toast({
            content: "提交成功",
          })
        }}
      >
        提交
      </Button>
    </>
  )
}
export default ToastDome
```
