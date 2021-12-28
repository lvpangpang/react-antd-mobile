import React from "react";
import GridContext from "./context";
import "./index.less";

declare interface RowProps {
  children: any;
  gutter?: number | Array<number>;
  style: object;
}

function Row(props: RowProps) {
  const { children, gutter = 0, style } = props;
  const RowStyle = {
    rowGap: `${Array.isArray(gutter) ? gutter[1] : 0}px`,
  };
  return (
    <GridContext.Provider value={{ gutter }}>
      <div className="zec-row" style={{ ...RowStyle, ...style }}>
        {children}
      </div>
    </GridContext.Provider>
  );
}

export default Row;
