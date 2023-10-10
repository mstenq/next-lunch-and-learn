"use client";

import { PropsWithChildren, useState } from "react";
import { DelayedComponent } from "../DelayedComponent/DelayedComponent";

export const Counter = ({ children }: PropsWithChildren) => {
  const [count, setCount] = useState(0);

  return (
    <main className="border-2 border-red-500 p-4 rounded shadow-lg">
      <h1 className="text-xl">Counter</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <div className="p-4">{children}</div>
    </main>
  );
};
