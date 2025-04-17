import { createClient } from "@/utils/supabase/server";
import signOut, { login } from "./action/action";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function Header() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const logout = async () => {
    await supabase.auth.signOut();
  };
  return (
    <div className="bg-gray-500 flex justify-between px-10 pt-5 items-center ">
      <div>logo</div>
      <div>list</div>
      <div>
        {user === null ? (
          <Link href={"/login"}>
            <button>login</button>
          </Link>
        ) : (
          <form action={signOut} className="flex flex-col">
            {user.email}
            <button>logout</button>
          </form>
        )}
      </div>
    </div>
  );
}
