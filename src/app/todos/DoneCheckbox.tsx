"use client";

import { updateTodo } from "@/actions/updateTodo";
import { ChangeEvent } from "react";

export const DoneCheckbox = ({
  id,
  done,
}: {
  id: number;
  done: number | null;
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateTodo(id, e.target.checked ? 1 : 0);
  };

  return (
    <input
      checked={Boolean(done)}
      value={1}
      type="checkbox"
      onChange={handleChange}
    />
  );
};
