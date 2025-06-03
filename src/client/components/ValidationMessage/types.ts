// Types for ValidationMessage component props
export interface ValidationMessageProps {
  message: string;
  className?: string;
  role?: "alert" | "status" | "none";
  type?: "error" | "success";
}
