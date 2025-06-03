// Types for InputField component props
export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode;
  inputClassName?: string;
}
