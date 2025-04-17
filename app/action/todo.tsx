"use server";
import { createClient } from "@/utils/supabase/server";

export async function todoForm(formData: FormData) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const text = formData.get("todo");

  if (user) {
    const data = {
      todo: text,
      user_id: user.id,
    };

    const { error } = await supabase.from("supatodo").insert(data);
    if (error) {
      console.log("error :", error);
    }
  }
}
