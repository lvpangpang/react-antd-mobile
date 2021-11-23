# Input

## API

| 属性        | 说明        | 类型    | 默认值 |
| ----------- | ----------- | ------- | ------ |
| placeholder | placeholder | string  |        |
| type        | 类型        | string  | text   |
| value       | 值          | string  |        |
| disabled    | 是否禁用    | boolean | false  |
| maxLength   | 最大长度    | number  |        |

## DEMOS

```jsx
import React from "react";
import { Input } from "react-antd-mobile";

function Index() {
  return (
    <>
      <Input placeholder="请输入姓名"></Input>
      <Input
        type="number"
        placeholder="请输入数字"
        maxLength={100}
        onChange={(val) => {
          console.log(val);
        }}
      ></Input>
      <Input
        disabled
        placeholder="请输入姓名"
        value="禁止"
        onChange={(val) => {
          console.log(val);
        }}
      ></Input>
    </>
  );
}

export default Index;
```
