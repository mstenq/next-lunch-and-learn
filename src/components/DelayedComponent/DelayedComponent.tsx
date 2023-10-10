import React from "react";

export const DelayedComponent = async ({
  delay,
  highlightBoundary = false,
  children,
}: {
  delay: number;
  highlightBoundary?: boolean;
  children?: React.ReactNode;
}) => {
  await new Promise((resolve) => setTimeout(resolve, delay));

  return (
    <div
      className={`bg-gray-100 p-4 rounded ${
        highlightBoundary && "border-2 border-green-500 shadow-lg"
      }`}
    >
      Delayed: {delay / 1000} seconds
      {children && <div className="p-4">{children}</div>}
    </div>
  );
};
