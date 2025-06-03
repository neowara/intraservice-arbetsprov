// Types for Select component props
export interface SelectProps {
  options: string[];
  selected: string[];
  onChange: (option: string) => void;
  max?: number;
  className?: string;
}
