import { TodoForm } from "@/components/getTodoList";
import { todoForm } from "../action/todo";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Todo() {
  const supabase = await createClient();
  const { data } = await supabase.from("supatodo").select();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  return (
    <div className=" h-screen items-baseline pt-20 px-10 flex justify-center bg-gray-100 text-gray-800   md:-pt-10  ">
      <div className="w-full md:w-xl  mx-auto bg-white rounded-2xl shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">📝 My Todo List</h1>

        <form className="flex gap-2 mb-4" action={todoForm}>
          <input
            pattern="^\S+$"
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="todo"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Add
          </button>
        </form>
        {data?.map((post) => (
          <div key={post.id}>
            <TodoForm todo={post.todo} />
          </div>
        ))}
      </div>
    </div>
  );
}
