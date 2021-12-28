# Grid

## API

Row

| 属性   | 说明             | 类型            | 默认值 |
| ------ | ---------------- | --------------- | ------ |
| gutter | 栅格水平垂直间隔 | number or Array | 0      |

Col

| 属性 | 说明         | 类型   | 默认值 |
| ---- | ------------ | ------ | ------ |
| span | 栅格占位格数 | number | 0      |

## DEMOS

```jsx
import React from "react";
import { Row, Col } from "react-antd-mobile";

function Index() {
  return (
    <div style={{ paddingTop: "100px" }}>
      <Row gutter={[10, 15]}>
        <Col span={6}>
          <div style={{ height: "100px", background: "rgba(0,146,255,.75)" }}>
            1
          </div>
        </Col>
        <Col span={6}>
          <div style={{ height: "100px", background: "rgba(0,146,255,.75)" }}>
            2
          </div>
        </Col>
        <Col span={6}>
          <div style={{ height: "100px", background: "rgba(0,146,255,.75)" }}>
            3
          </div>
        </Col>
        <Col span={6}>
          <div style={{ height: "100px", background: "rgba(0,146,255,.75)" }}>
            4
          </div>
        </Col>
        <Col span={6}>
          <div style={{ height: "100px", background: "rgba(0,146,255,.75)" }}>
            5
          </div>
        </Col>{" "}
        <Col span={6}>
          <div style={{ height: "100px", background: "rgba(0,146,255,.75)" }}>
            6
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default Index;
```
