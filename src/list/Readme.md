# List

## API

| 属性          | 说明         | 类型              | 默认值 |
| ------------- | ------------ | ----------------- | ------ |
| onClick       | 点击回调函数 | (e: Object): void |        |
| leftMainText  | 左边主要文案 | string            |        |
| leftextraText | 左边次要文案 | string            |        |
| rightMainText | 右边主要文案 | string            |        |

## DEMOS

```jsx
import React from "react";
import { List } from "react-antd-mobile";

function ListDome() {
  return (
    <div>
      <List
        leftMainText="TitleTitleTitleTitleTitleTitleTitleTitleTitle"
        rightMainText="extrac content"
      ></List>
      <List
        leftMainText="Title"
        leftextraText="subtitle"
        rightMainText="extrac content"
      ></List>
      <List leftMainText="Title" onClick={() => {}}></List>
      <List
        className="diy-list"
        leftMainText="Title"
        rightMainText="extrac content"
      ></List>
    </div>
  );
}
export default ListDome;
```
