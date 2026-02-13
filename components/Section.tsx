import classnames from "classnames";
import React, { ReactNode } from "react";
import { useTheme } from "../contexts/ThemeContext";

type SectionProps = {
  type?: "light" | "dark";
  className?: string;
  children: ReactNode;
};

export const Section: React.FC<SectionProps> = ({
  type = "light",
  className = "",
  children,
}) => {
  const { theme } = useTheme();
  
  // Use these specific colors for consistency
  const darkPrimaryBg = "bg-gray-900";  // Main dark background
  const darkSecondaryBg = "bg-gray-800"; // Secondary dark background
  const darkText = "text-white";
  
  let bgClass = "";
  let textClass = "";
  
  if (theme === 'light') {
    // Light mode styling
    bgClass = type === "light" ? "bg-white" : "bg-gray-50";
    textClass = type === "light" ? "text-gray-900" : "text-gray-800";
  } else {
    // Dark mode styling - use consistent colors
    bgClass = type === "light" ? darkPrimaryBg : darkSecondaryBg;
    textClass = darkText;
  }
  
  return (
    <section
      className={classnames(
        "py-16",
        bgClass,
        textClass,
        "transition-colors duration-300 section-transition",
        className
      )}
    >
      {children}
    </section>
  );
};

export default Section; 