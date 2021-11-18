interface InputProps {
  className?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  disabled?: boolean;
  maxLength?: number;
  onChange?: (val: any) => void;
}

export declare function Input(props: InputProps)