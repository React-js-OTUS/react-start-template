export interface IInput {
  value: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
  id?: string;
  form?: string;
  disabled?: boolean;
  changeInputValue?: (value: string | undefined) => void;
}
