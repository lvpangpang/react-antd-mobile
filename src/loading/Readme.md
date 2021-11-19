# Loading

## API

| 属性  | 说明 | 类型   | 默认值 |
| ----- | ---- | ------ | ------ |
| style | zid  | object |        |

## DEMOS

```jsx
import React from "react";
import { Button, Loading } from "react-antd-mobile";

function LoadingDome() {
  setTimeout(() => {
    Loading.hide();
  }, 3000);

  return (
    <>
      <Button
        onClick={() => {
          Loading.show();
        }}
      >
        Loading
      </Button>
    </>
  );
}
export default LoadingDome;
```
