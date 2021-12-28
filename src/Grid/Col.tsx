import React from "react";
import GridContext from "./context";
import "./index.less";

declare interface ColProps {
  children: any;
  span: number;
}

function Col(props: ColProps) {
  const { span, children } = props;
  const { gutter } = React.useContext(GridContext);
  return (
    <div
      className="zec-col"
      style={{
        flex: `0 0 ${(span / 24 > 1 ? 1 : span / 24) * 100}%`,
        padding: `0 ${Array.isArray(gutter) ? gutter[0] : gutter}px`,
      }}
    >
      {children}
    </div>
  );
}

export default Col;
