import React from "react";
import classNames from "classnames";

type CardProps = {
  className?: string;
  children: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ className = "", children }) => {
  return (
    <div
      className={classNames(
        "overflow-hidden rounded-xl shadow-soft hover:shadow-soft-lg card-hover",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card; 