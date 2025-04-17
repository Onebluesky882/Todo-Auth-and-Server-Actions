export default async function Todo() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">📝 My Todo List</h1>

        {/* Input for new todo */}
        <form className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Add a new task..."
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Add
          </button>
        </form>

        {/* Todo items (example list) */}
        <ul className="space-y-2">
          <li className="flex justify-between items-center bg-gray-100 p-2 rounded-lg">
            <span>✅ Learn Tailwind</span>
            <button className="text-red-500 hover:text-red-700">🗑️</button>
          </li>
          <li className="flex justify-between items-center bg-gray-100 p-2 rounded-lg">
            <span>📚 Build a todo app</span>
            <button className="text-red-500 hover:text-red-700">🗑️</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
