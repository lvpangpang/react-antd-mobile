import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.less';

interface Props {
  style?: object
}

function Loading(props: Props) {
  const {
    style
  } = props;

  return (
    <div className='zec-loading'>
      <div className="spinner">
        <div className="double-bounce1" style={style}></div>
        <div className="double-bounce2" style={style}></div>
      </div>
    </div>
  );
}

const div = document.createElement('div');

export default {
  show(style: Props) {
    document.body.appendChild(div);
    ReactDOM.render(<Loading style={style} />, div);
  },
  hide() {
    document.body.removeChild(div);
  }
};
