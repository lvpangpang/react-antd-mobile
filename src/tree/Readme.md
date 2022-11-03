# Tree

## API

| 属性     | 说明               | 类型  | 默认值 |
| -------- | ------------------ | ----- | ------ |
| treeData | 数据源             | Array<object> |        |
| expand   | 默认展开菜单的 key | Array<string> |        |

## DEMOS

```jsx
import React from "react"
import { Tree } from "react-antd-mobile"

const treeData = [
  {
    title: "我是1",
    key: "1",
    children: [
      {
        title: "我是1-1",
        key: "1-1",
        children: [
          {
            title: "我是1-1-1",
            key: "1-1-1",
          },
          {
            title: "我是1-1-2",
            key: "1-1-2",
          },
          {
            title: "我是1-1-3",
            key: "1-1-3",
          },
        ],
      },
      {
        title: "我是1-2",
        key: "1-2",
        children: [
          {
            title: "我是1-2-1",
            key: "1-2-1",
          },
          {
            title: "我是1-2-2",
            key: "1-2-2",
          },
        ],
      },
    ],
  },
  { title: "我是2", key: "2", children: [] },
]
function TreeDome() {
  return (
    <>
      <Tree treeData={treeData} expand={["1"]}></Tree>
    </>
  )
}
export default TreeDome
```
