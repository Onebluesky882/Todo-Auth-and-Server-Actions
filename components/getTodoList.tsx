"use client";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

type Todo = {
  id?: string;
  todo: string;
};

const removeTodo = async (id: string) => {
  const supabase = createClient();
  const { error } = await supabase.from("supatodo").delete().eq("id", id);
  if (error) {
    console.log(error);
  }
};

export const TodoForm = ({ id, todo }: Todo) => {
  const supabase = createClient();

  useEffect(() => {
    const channel = supabase
      .channel("schema-db-change")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
        },
        (payload) => console.log("Change received:", payload)
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <div>
      <ul className="space-y-2">
        <li className="flex justify-between items-center bg-gray-100 p-2 rounded-lg">
          <span>{todo}</span>
          <button
            onClick={() => removeTodo(id as unknown as string)}
            className="text-red-500 hover:text-red-700"
          >
            🗑️
          </button>
        </li>
      </ul>
    </div>
  );
};
