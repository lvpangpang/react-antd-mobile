declare interface ButtonProps {
  children?: any;

  // 样式
  className?: string;

  // 按钮是否被🚫
  disabled?: boolean;

  // 点击回调的事件
  onClick?: Function;

  // loading
  loading?: boolean;

  // 主题
  type?: "primary" | "success" | "error" | "warning";

  // 样式
  style?: string;

  inline?: boolean;
}

export declare function Button(props: ButtonProps);
