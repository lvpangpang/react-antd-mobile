import { createContext, Context } from "react";

interface GridContextProps {
  gutter?: number | Array<number>;
}
const GridContext: Context<GridContextProps> = createContext({});

export default GridContext;
