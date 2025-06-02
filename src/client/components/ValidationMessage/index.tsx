import React from "react";
import type { ValidationMessageProps } from "./types";

const ValidationMessage: React.FC<ValidationMessageProps> = ({ message, className = "", role = "alert" }) => (
  <div
    className={`flex items-center bg-red-100 border-l-4 border-red-400 text-red-800 p-4 my-6 rounded shadow-sm ${className}`}
    role={role}
  >
    <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01" />
    </svg>
    <span className="font-semibold">{message}</span>
  </div>
);

export default ValidationMessage;
