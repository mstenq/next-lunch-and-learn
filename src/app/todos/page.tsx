import { createTodo } from "@/actions/createTodo";
import { db } from "@/db/db";
import { todoTable } from "@/db/schema/todoTable";
import { and, eq, like } from "drizzle-orm";
import { AddTodoForm } from "./AddTodoForm";
import { DoneCheckbox } from "./DoneCheckbox";
import { SearchField } from "./SearchField";

type Props = {
  searchParams: { q?: string; done?: string };
};

export default async function Todos({ searchParams }: Props) {
  const query = searchParams.q ?? "";
  const done = searchParams.done ?? "";
  const todos = await db
    .select()
    .from(todoTable)
    .where(
      and(
        like(todoTable.content, `%${query}%`),
        eq(todoTable.done, Number(done))
      )
    );

  return (
    <main className="">
      <h1 className="text-xl pb-4">Todos</h1>
      <SearchField />
      <ul className="py-4">
        {todos.map((todo) => (
          <li key={todo.id}>
            <DoneCheckbox id={todo.id} done={todo.done} /> {todo.content}
          </li>
        ))}
      </ul>
      <form action={createTodo}>
        <AddTodoForm />
      </form>
    </main>
  );
}
