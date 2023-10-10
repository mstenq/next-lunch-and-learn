import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const todoTable = sqliteTable("todos", {
  id: integer("id").primaryKey(),
  content: text("content"),
  done: integer("done"),
});

export type Todo = typeof todoTable.$inferSelect; // return type when queried
export type InsertTodo = Omit<typeof todoTable.$inferInsert, "id">; // insert type
