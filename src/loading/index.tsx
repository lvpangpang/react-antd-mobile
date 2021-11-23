import React from "react";
import ReactDOM from "react-dom";
import "./index.less";

function Loading() {
  return (
    <div className="zec-loading">
      <div className="spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>
    </div>
  );
}

const div = document.createElement("div");

export default {
  show() {
    document.body.appendChild(div);
    ReactDOM.render(<Loading />, div);
  },
  hide() {
    document.body.removeChild(div);
  },
};
