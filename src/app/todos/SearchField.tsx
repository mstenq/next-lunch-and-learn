"use client";

import { useSearchParams } from "next/navigation";
import { useRef } from "react";

export const SearchField = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const done = searchParams.get("done") ? 1 : 0;
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form ref={formRef} className="flex gap-4">
      <input
        placeholder="Search Todos..."
        type="search"
        name="q"
        defaultValue={query}
      />
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          name="done"
          checked={Boolean(done)}
          value={1}
          onChange={() => formRef.current?.submit?.()}
        />
        <label>Show Completed</label>
      </div>
    </form>
  );
};
