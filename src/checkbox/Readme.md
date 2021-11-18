# Checkbox

## API

| 属性     | 说明                      | 类型               | 默认值 |
| -------- | ------------------------- | ------------------ | ------ |
| value    | 当前选中值                | Array              |        |
| onChange | change 事件触发的回调函数 | (value: any): void |        |

## CheckboxItem

## API

| 属性     | 说明 | 类型             | 默认值 |
| -------- | ---- | ---------------- | ------ |
| value    | 值   | string or number |        |
| label    | name | string           |        |
| disabled | 禁用 | boolean          | false  |

```jsx
import React from "react";
import { Checkbox } from "react-antd-mobile";

const CheckboxItem = Checkbox.CheckboxItem;

function Index() {
  return (
    <>
      <Checkbox
        onChange={(value) => {
          console.log(value);
        }}
        value={[1]}
      >
        <CheckboxItem value={1}>苹果</CheckboxItem>
        <CheckboxItem value={2}>西瓜</CheckboxItem>
        <CheckboxItem value={2} disabled>
          哈密瓜
        </CheckboxItem>
      </Checkbox>
      <br />
      <br />
      <br />
      <Checkbox value={[]}>
        <CheckboxItem value={1}>吕肥肥</CheckboxItem>
        <CheckboxItem value={2}>王大熊</CheckboxItem>
        <CheckboxItem value={3}>王小美</CheckboxItem>
      </Checkbox>
    </>
  );
}
export default Index;
```
