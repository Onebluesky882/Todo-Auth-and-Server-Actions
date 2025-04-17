import Link from "next/link";
import { login, signup } from "../action/action";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-800  px-10 md:-pt-20  ">
      <form className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-4 -mt-30">
        <h2 className="text-2xl font-bold text-center">Welcome 👋</h2>

        <div>
          <label htmlFor="email" className="block mb-1 font-medium">
            Email:
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-2 border rounded-lg border-gray-300   text-gray-800"
          />
        </div>

        <div>
          <label htmlFor="password" className="block mb-1 font-medium">
            Password:
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="w-full px-4 py-2 border   border-gray-300  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
          />
        </div>

        <div className="flex justify-between items-center">
          <Link href="/login" className="text-blue-600 hover:underline text-sm">
            Log in
          </Link>
          <button
            type="submit"
            formAction={signup}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}
