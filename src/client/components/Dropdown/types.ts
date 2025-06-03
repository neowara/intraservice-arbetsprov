// Types for Dropdown component props
export interface DropdownProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  dropdownRef: React.RefObject<HTMLDivElement>;
  label: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}
