# Toast

## API

| 属性     | 说明                           | 类型                    | 默认值 |
| -------- | ------------------------------ | ----------------------- | ------ |
| content  | 提示内容                       | React.Element or string |        |
| duration | 自动关闭的延迟，单位毫秒       | number                  | 2000   |
| onClose  | 关闭后回调                     | Function                |        |
| mask     | 是否显示透明蒙层，防止触摸穿透 | Boolean                 | true   |

## Function

```
  Toast.info(props)
  Toast.hide()
```

## DEMOS

```jsx
import React from "react";
import { Button, Toast } from "react-antd-mobile";

function ToastDome() {
  return (
    <>
      <Button
        onClick={() => {
          Toast.info({
            content:
              "吕肥肥吕肥肥吕肥肥吕肥肥吕肥肥吕肥肥吕肥肥吕肥肥吕肥肥吕肥肥吕肥肥吕肥肥吕肥肥吕肥肥吕肥肥",
          });
        }}
      >
        mask遮罩（默认）
      </Button>
      <br />
      <Button
        onClick={() => {
          Toast.info({ content: "吕肥肥", mask: false });
        }}
      >
        无mask遮罩
      </Button>
      <br />
      <Button
        onClick={() => {
          Toast.hide();
        }}
      >
        手动关闭上一个Toast
      </Button>
    </>
  );
}
export default ToastDome;
```
