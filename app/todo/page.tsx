import { TodoForm } from "@/components/TodosForm";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Todo() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  return (
    <div className=" h-screen items-baseline pt-20 px-10 flex justify-center bg-gray-100 text-gray-800   md:-pt-10  ">
      <div className="w-full md:w-xl  mx-auto bg-white rounded-2xl shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">📝 My Todo List</h1>
        <TodoForm />
      </div>
    </div>
  );
}
