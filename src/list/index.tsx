import * as React from "react";
import TouchFeedback from "rmc-feedback";
import Icon from "../Icon/index";
import "./index.less";

export interface Props {
  className?: string;
  leftMainText: string;
  leftextraText?: string;
  rightMainText?: string;
  onClick?: () => void;
}

function List(props: Props) {
  const {
    className = "",
    leftMainText,
    leftextraText,
    rightMainText,
    onClick,
  } = props;

  return (
    <div className={`zec-list ${className}`} onClick={onClick || function() {}}>
      <TouchFeedback activeClassName={onClick ? "touch-active" : ""}>
        <div className="zec-list-inner">
          <div className="left-main">
            <p>{leftMainText}</p>
            <p className="extra-text">{leftextraText}</p>
          </div>
          <div className="right-main">
            {onClick ? <Icon type="right" size="sm" /> : rightMainText}
          </div>
        </div>
      </TouchFeedback>
    </div>
  );
}

export default List;
