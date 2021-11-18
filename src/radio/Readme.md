# Radio

## API

| 属性     | 说明                      | 类型               | 默认值 |
| -------- | ------------------------- | ------------------ | ------ |
| value    | 当前选中值                | string or number   |        |
| onChange | change 事件触发的回调函数 | (value: any): void |        |

## RadioItem

### API

| 属性     | 说明 | 类型             | 默认值 |
| -------- | ---- | ---------------- | ------ |
| value    | 值   | string or number |        |
| label    | name | string           |        |
| disabled | 禁用 | boolean          | false  |

```jsx
import React from "react";
import { Radio } from "react-antd-mobile";

const RadioItem = Radio.RadioItem;

function RadioDome() {
  return (
    <>
      <Radio
        onChange={(value) => {
          console.log(value);
        }}
        value={2}
      >
        <RadioItem value={1}>使用余额支付</RadioItem>
        <RadioItem value={2}>使用微信支付</RadioItem>
        <RadioItem value={2} disabled>
          使用微信支付
        </RadioItem>
      </Radio>
      <br />
      <br />
      <br />
      <Radio
        onChange={(value) => {
          console.log(value);
        }}
        value={1}
      >
        <RadioItem value={1}>吕肥肥</RadioItem>
        <RadioItem value={2}>王大熊</RadioItem>
        <RadioItem value={3}>王小美</RadioItem>
      </Radio>
    </>
  );
}
export default RadioDome;
```
