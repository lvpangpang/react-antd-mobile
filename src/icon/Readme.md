# Icon

## API

| 属性 | 说明 | 类型   | 默认值 |
| ---- | ---- | ------ | ------ |
| type | 类型 | string |        |
| size | 大小 | string |        |

## DEMOS

```jsx
import React from "react";
import { Icon } from "react-antd-mobile";

function Index() {
  const iconList = [
    "check",
    "check-circle",
    "loading",
    "cross",
    "left",
    "right",
    "down",
    "up",
    "search",
    "ellipsis",
    "voice",
    "plus",
    "minus",
    "dislike",
    "fail",
    "success",
  ];
  return (
    <>
      {iconList.map((item) => {
        return (
          <div
            style={{
              display: "inline-block",
              width: "50%",
              margin: "0 0 50px 0",
              textAlign: "center",
            }}
          >
            <Icon type={item}></Icon>
            <p style={{ fontSize: "16px" }}>{item}</p>
          </div>
        );
      })}
    </>
  );
}
export default Index;
```
