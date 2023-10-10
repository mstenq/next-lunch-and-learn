"use server";

import { db } from "@/db/db";
import { todoTable } from "@/db/schema/todoTable";
import { revalidatePath } from "next/cache";

export const createTodo = async (formData: FormData) => {
  const content = String(formData.get("content"));
  await new Promise((resolve) => setTimeout(resolve, 1500));
  await db.insert(todoTable).values({
    content,
    done: 0,
  });
  revalidatePath("/");
};
