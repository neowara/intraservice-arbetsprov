// ValidationMessage component for displaying error or success messages
import React from "react";
import type { ValidationMessageProps } from "./types";
import { FiAlertCircle, FiCheckCircle } from "react-icons/fi";

const ValidationMessage: React.FC<ValidationMessageProps> = ({
  message,
  className = "",
  role = "alert",
  type = "error",
}) => {
  // Custom styles for success and error
  const base =
    type === "success"
      ? "flex items-start gap-4 rounded-md px-6 py-6 mt-4 bg-green-100 text-black"
      : "flex items-center gap-4 rounded-md px-6 py-4 mt-4 text-lg font-bold bg-red text-black";
  const Icon = type === "error" ? FiAlertCircle : FiCheckCircle;
  const lines = String(message).split(/\r?\n/);

  return (
    <div className={`${base} ${className}`} role={role}>
      <span
        className={
          type === "success"
            ? "flex-shrink-0 flex items-center h-8 w-8 text-3xl mt-1"
            : "flex-shrink-0 flex items-center h-8 w-8 text-3xl"
        }
      >
        <Icon
          className={
            type === "success" ? "w-full h-full text-black" : "w-full h-full"
          }
        />
      </span>
      <div className={type === "success" ? "leading-snug" : "leading-snug"}>
        {type === "success" ? (
          <>
            <div className="font-bold text-xl mb-1">{lines[0]}</div>
            {lines[1] && (
              <div className="text-base font-normal mt-1">{lines[1]}</div>
            )}
          </>
        ) : (
          lines.map((line, i) => <div key={i}>{line}</div>)
        )}
      </div>
    </div>
  );
};

export default ValidationMessage;
