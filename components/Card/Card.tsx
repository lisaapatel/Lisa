import { ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`min-w-[500px] max-w-[600px] rounded-lg bg-white p-5 text-black shadow ${className}`}
    >
      {children}
    </div>
  );
}
