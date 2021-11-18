# Switch

## API

| 属性     | 说明                      | 类型                  | 默认值  |
| -------- | ------------------------- | --------------------- | ------- |
| checked  | 是否默认选中              | Boolean               | false   |
| disabled | 是否不可修改              | Boolean               | false   |
| color    | 开关打开颜色              | String                | #4dd865 |
| name     | name                      | String                |         |
| onChange | change 事件触发的回调函数 | (checked: bool): void |         |

```jsx
import React from "react";
import { Switch } from "react-antd-mobile";
function SwitchDome() {
  return (
    <div>
      <Switch
        name="Off"
        onChange={(value) => {
          console.log(value);
        }}
      ></Switch>
      <Switch
        name="On"
        checked
        onChange={(value) => {
          console.log(value);
        }}
      ></Switch>
      <Switch name="Disabled on" checked disabled></Switch>
      <Switch name="Disabled off" disabled></Switch>
      <Switch name="Different Color" color="red"></Switch>
    </div>
  );
}
export default SwitchDome;
```
