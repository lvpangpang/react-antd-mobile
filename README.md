# react-antd-mobile

React 移动端组件库

**[文档地址](http://116.62.139.102/react-antd-mobile)**

使用 demo

```javascript
import { Button } from "react-antd-mobile";
function Index() {
  return (
    <>
      <Button loading>确定</Button>
      <br></br>
      <Button disabled>disabled</Button>
      <br></br>
      <Button type="warning">Warning</Button>
      <br></br>
      <Button type="error">Error</Button>
      <br></br>
      <Button type="success" style={{ fontSize: "30px" }}>
        Success
      </Button>
    </>
  );
}
```
