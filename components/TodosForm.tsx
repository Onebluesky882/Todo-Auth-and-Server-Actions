"use client";
import { removeTodo, todoForm } from "@/app/action/todo";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";

type Todo = {
  id?: string;
  todo: string;
  create_at?: number;
};

export const TodoForm = () => {
  const supabase = createClient();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");
  const router = useRouter();

  const fetchData = async () => {
    const { data } = await supabase.from("supatodo").select();
    if (data) setTodos(data);
  };

  useEffect(() => {
    fetchData();
    const channel = supabase
      .channel("schema-db-change")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "supatodo",
        },
        () => {
          fetchData();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // input form
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    await todoForm(formData);
    setInput("");
  };

  const handleRemove = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    await removeTodo(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
        <input
          name="todo"
          pattern="^\S+$"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task"
          className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-none focus:ring-1 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Add
        </button>
      </form>

      <ul className="space-y-3  f ">
        {[...todos]
          .sort(
            (a, b) =>
              new Date(b.create_at as number).getTime() -
              new Date(a.create_at as number).getTime()
          )
          .map((item, index) => (
            <li
              key={item.id}
              tabIndex={1}
              className="flex justify-between items-center bg-gray-100 p-3 rounded-lg border border-transparent focus:border-blue-500 hover:border-blue-300 transition outline-none"
            >
              <span className="truncate">
                <span className="font-medium mr-2">{index + 1}.</span>
                {item.todo}
              </span>
              <form onSubmit={handleRemove}>
                <input type="hidden" name="id" value={item.id} />
                <button
                  type="submit"
                  className="text-red-500 hover:text-red-700 p-1"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </form>
            </li>
          ))}
      </ul>
    </>
  );
};
