// Button component for consistent styling and loading state
import React from "react";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  loading = false,
  ...props
}) => (
  <button className={className} disabled={loading || props.disabled} {...props}>
    {loading ? "Skickar..." : children}
  </button>
);

export default Button;
