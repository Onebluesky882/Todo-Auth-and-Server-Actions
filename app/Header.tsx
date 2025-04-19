import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import signOut from "./action/action";

export default async function Header() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="bg-gray-800 text-white py-4 px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/">WanSing Groups</Link>
        </div>

        {/* Navigation */}
        <nav className="space-x-4">
          <Link href="/todo" className="hover:underline">
            Todo
          </Link>
          <Link href="/about-me" className="hover:underline">
            About Me
          </Link>
        </nav>

        {/* User Actions */}
        <div className="flex items-center gap-4">
          {user ? (
            <form action={signOut} className="flex items-center gap-2">
              <span className="text-sm text-gray-300">{user.email}</span>
              <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
                Logout
              </button>
            </form>
          ) : (
            <Link href="/login">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
