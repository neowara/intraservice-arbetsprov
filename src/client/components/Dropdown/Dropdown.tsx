// Dropdown component for custom select menus
import React from "react";
import type { DropdownProps } from "./types";

const Dropdown: React.FC<DropdownProps> = ({
  open,
  setOpen,
  dropdownRef,
  label,
  children,
  className = "w-full",
}) => (
  <div className={`relative ${className}`} ref={dropdownRef}>
    <button
      type="button"
      className="w-full ring px-3 py-2 bg-white text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-action-blue transition-colors hover:cursor-pointer hover:ring-2 hover:ring-action-gray"
      onClick={() => setOpen(!open)}
      aria-haspopup="listbox"
      aria-expanded={open}
    >
      {label}
      <svg
        className={`ml-2 w-4 h-4 transition-transform ${
          open ? "rotate-180" : "rotate-0"
        }`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    {open && (
      <div className="absolute left-0 right-0 z-10 mt-1 bg-white border border-gray shadow-lg max-h-64 overflow-auto">
        {children}
      </div>
    )}
  </div>
);

export default Dropdown;
