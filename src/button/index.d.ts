declare interface ButtonProps {

  // 按钮是否被🚫
  disabled?: boolean;

  // 点击回调的事件
  onClick?: Function;

  // loading
  loading?: boolean;

  // 主题
  type?: "primary" | "success" | "error" | "warning";

  // 是否行内元素
  inline?: boolean;
}

export declare function Button(props: ButtonProps);
