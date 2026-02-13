import classnames from "classnames";
import React from "react";

type TextBlockProps = {
  header?: string;
  text?: string;
  className?: string;
};

export const TextBlock: React.FC<TextBlockProps> = ({
  header,
  text,
  className = "",
}) => {
  return (
    <div className={classnames("my-8", className)}>
      {header && <h2 className="text-3xl font-bold mb-4 dark:text-white">{header}</h2>}
      {text && <p className="text-lg dark:text-gray-300">{text}</p>}
    </div>
  );
};

export default TextBlock; 