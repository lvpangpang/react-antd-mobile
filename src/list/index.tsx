import React from "react";
import TouchFeedback from "rmc-feedback";
import Icon from "../icon/index";
import "./index.less";

export interface Props {
  leftMainText: string;
  leftextraText?: string;
  rightMainText?: string;
  onClick?: () => void;
}

function List(props: Props) {
  const {
    leftMainText,
    leftextraText,
    rightMainText,
    onClick,
  } = props;

  return (
    <div className='zec-list' onClick={onClick || function() {}}>
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
