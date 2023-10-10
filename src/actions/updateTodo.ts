"use server";

import { db } from "@/db/db";
import { todoTable } from "@/db/schema/todoTable";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const updateTodo = async (id: number, done: number) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  await db
    .update(todoTable)
    .set({
      done,
    })
    .where(eq(todoTable.id, id));
  revalidatePath("/");
};
