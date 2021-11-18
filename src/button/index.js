import React from "react";
import TouchFeedback from "rmc-feedback";
import Icon from "../Icon/index";
import "./index.less";

function Button(props) {
  const {
    children,
    disabled = false,
    onClick = () => {},
    loading = false,
    type = "primary",
    inline,
  } = props;

  let isClick = false;

  const _onClick = () => {
    if (!disabled && !isClick) {
      isClick = true;
      setTimeout(function() {
        isClick = false;
      }, 500);
      onClick();
    }
  };

  return (
    <div
      style={inline && { display: "inline-block" }}
      className="zec-button"
      onClick={_onClick}
    >
      <TouchFeedback activeClassName={!disabled ? "zec-button-active" : ""}>
        <div
          className={`zec-button-inner zec-button-${type} ${
            disabled || loading ? "zec-button-disable" : ""
          }`}
        >
          {loading && (
            <span className="loading-right">
              <Icon type="loading" size="sm" />
            </span>
          )}
          {children}
        </div>
      </TouchFeedback>
    </div>
  );
}

export default Button;
