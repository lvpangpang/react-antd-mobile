# Button

## API

| 属性     | 说明               | 类型              | 默认值    |
| -------- | ------------------ | ----------------- | --------- |
| disabled | 设置禁用           | boolean           | false     |
| onClick  | 点击回调函数       | (e: Object): void |           |
| loading  | 是否处于加载状态   | boolean           | false     |
| inline   | 是否设置为行内按钮 | boolean           | false     |
| type     | 按钮类型           | 'primary'         | 'warning' | 'error' | 'success' | primary |

## DEMOS

```jsx
import React from "react";
import { Button } from "react-antd-mobile";

function Index() {
  return (
    <>
      <div style={{ marginBottom: "25px" }}>
        <Button
          inline
          onClick={() => {
            console.log("吕肥肥");
          }}
        >
          Inline Default
        </Button>
      </div>
      <Button>Default</Button>
      <br></br>
      <Button type="warning">Warning</Button>
      <br></br>
      <Button type="error">Error</Button>
      <br></br>
      <Button type="success">Success</Button>
    </>
  );
}
export default Index;
```
