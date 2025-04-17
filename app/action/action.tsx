"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

/* login  */
export async function login(formData: FormData) {
  const supabase = await createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/todo", "layout");
  redirect("/todo");
}

/* signup */
export async function signup(formData: FormData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { data: signup, error } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,

    options: {
      emailRedirectTo: "http://localhost:3000/auth/confirm",
    },
  });

  revalidatePath("/", "layout");
  redirect("/waiting");
}

export default async function signOut(formData: FormData) {
  const supabase = await createClient();
  await supabase.auth.signOut();

  await redirect("/");
}
