"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";

export function AddTodoForm() {
  const { pending, data } = useFormStatus();

  const newTodoContent = data?.get("content");

  return (
    <>
      {newTodoContent && "Adding " + newTodoContent + "..."}
      <div className="flex gap-2">
        <input
          type="text"
          disabled={pending}
          name="content"
          placeholder="Add todo..."
        />
        <button type="submit" disabled={pending}>
          {pending ? "Adding..." : "Add"}
        </button>
      </div>
    </>
  );
}
