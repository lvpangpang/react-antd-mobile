import React from "react";
import ReactDOM from "react-dom";
import "./index.less";

interface Props {
  content: string;
  duration?: number;
  mask?: Boolean;
  onClose?: Function;
}

function Template(props: Props) {
  const { content, mask } = props;

  return (
    <div
      className="zec-toast"
      style={mask ? { width: "100%", height: "100%" } : {}}
    >
      <div className="content">{content}</div>
    </div>
  );
}

let isToast = false;
const div = document.createElement("div");
let timer: any = null;

function Toast(props: Props) {
  const { content, duration, mask = true, onClose = () => {} } = props;

  const remove = () => {
    timer = setTimeout(() => {
      document.body.removeChild(div);
      onClose();
      isToast = false;
    }, duration || 2000);
  };

  const add = () => {
    document.body.appendChild(div);
    ReactDOM.render(<Template content={content} mask={mask} />, div);
    isToast = true;
    remove();
  };

  if (!isToast) {
    add();
  } else {
    document.body.removeChild(div);
    clearTimeout(timer);
    isToast = false;
    add();
  }
}

export default {
  info(props: Props) {
    Toast(props);
  },
  hide() {
    if (isToast) {
      document.body.removeChild(div);
      clearTimeout(timer);
      isToast = false;
    }
  },
};
