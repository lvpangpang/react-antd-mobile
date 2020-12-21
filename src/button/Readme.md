## Button
### API
属性 | 说明 | 类型 | 默认值
---- | ---- | ---- | ----
className | 按钮样式类名 | string | |
disabled | 设置禁用 | boolean | false
onClick | 点击回调函数 | (e: Object): void | | 
loading | loading状态 | boolean | false
inline | 是否设置为行内按钮	 | boolean | false
style | 自定义样式 | object | |
type | 按钮类型 | string(primary, warning, error, success) | primary

```tsx
import React from 'react';
import Button  from './index';

function ButtonDome() {
  return(
    <>
      <div style={{marginBottom: '25px'}}>
        <Button inline  onClick={() => {console.log('吕肥肥')}}>Inline</Button>
      </div>
      
      <Button loading ads='3213'>提交</Button>
      <br></br>
      <Button disabled>default disabled</Button>
      <br></br>
      <Button type="warning">Warning</Button>
      <br></br>
      <Button type="error">Error</Button>
      <br></br>
      <Button type="success" style={{fontSize: '30px'}}>Success</Button>
    </>
  );
}
export default ButtonDome;
```