# Loading

## API

| 属性  | 说明 | 类型   | 默认值 |
| ----- | ---- | ------ | ------ |
| style | zid  | object |        |

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
          Loading.show({ background: "red" });
        }}
      >
        Loading
      </Button>
    </>
  );
}
export default LoadingDome;
```
