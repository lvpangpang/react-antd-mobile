declare interface Checkbox {
  children: any;
  value: Array<any>;
  onChange: Function;
}

export declare function Checkbox(props: Checkbox)

declare interface CheckboxItem {
  value: string | number;
  label: string;
  checkboxValue: any;
  disabled?: boolean;
  onClick: Function;
}

export declare function CheckboxItem(props: CheckboxItem)
