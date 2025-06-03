// Section component for grouping form content with a title
import React from "react";
import type { SectionProps } from "./types";

const Section: React.FC<SectionProps> = ({
  title,
  children,
  className = "mb-8",
}) => (
  <section className={className}>
    {title && <h2 className="text-2xl font-bold mb-4 text-black">{title}</h2>}
    {children}
  </section>
);

export default Section;
