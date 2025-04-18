"use server";
import { createClient } from "@/utils/supabase/server";

export async function todoForm(formData: FormData) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const text = formData.get("todo")?.toString().trim();
  if (!user || !text) return;
  if (user) {
    const data = {
      todo: text,
      user_id: user.id,
    };

    const { error } = await supabase.from("supatodo").insert(data);
    if (error) {
      console.log("Insert error:", error.message);
    }
  }
}

export async function removeTodo(formData: FormData) {
  const id = formData.get("id") as string;

  const supabase = await createClient();
  await supabase.from("supatodo").delete().eq("id", id);
}
