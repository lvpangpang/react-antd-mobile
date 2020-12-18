## Icon
### API
属性 | 说明 | 类型 | 默认值
---- | ---- | ---- | ----
type | 类型 | string | |
size | 大小 | string | |

```jsx
import React from 'react';
import { Icon } from '../index';

function IconDome() {
  const iconList = ['check', 'check-circle', 'loading', 'cross', 'left', 'right', 'down', 'up', 'search', 'ellipsis', 'voice', 'plus', 'minus', 'dislike', 'fail', 'success'];
  return(
    <>
      {
        iconList.map((item) => {
          return <div style={{display:'inline-block', width: '33.3%', margin: '0 0 50px 0', textAlign: 'center'}}><Icon type={item}></Icon><p>{item}</p></div>
        })
      }
    </>
  );
}
export default IconDome;
```

