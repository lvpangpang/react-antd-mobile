# Loading

## API

无

## Function

```js
Loading.show(); // 开启一个Loading
Loading.hide(); // 关闭一个Loading
```

## DEMOS

```jsx
import React from "react";
import { Button, Loading } from "react-antd-mobile";

function LoadingDome() {
  return (
    <div style={{ paddingTop: "200px" }}>
      <Button
        onClick={() => {
          Loading.show();
        }}
      >
        Loading
      </Button>
    </div>
  );
}
export default LoadingDome;
```
