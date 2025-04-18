import Link from "next/link";

export default async function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-800">
      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-extrabold mb-6 leading-tight">
          Stay Organized with <span className="text-blue-600">TaskMate</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
          Your ultimate ToDo app to boost productivity and keep your life on
          track — one task at a time.
        </p>
        {/* Gallery Section */}
        <section className="max-w-6xl mx-auto px-6 py-2">
          <h2 className="text-3xl font-bold text-center mb-10">
            See TaskMate in Action
          </h2>
          <div className="grid grid-rows-2 md:grid-cols-3 gap-4  max-md:grid-cols-2 max-md:grid-rows-2">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
              alt="Task Preview 2"
              className="rounded-xl shadow-lg object-cover h-64 w-full "
            />
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
              alt="Task Preview 3"
              className="rounded-xl shadow-lg object-cover h-64 w-full "
            />{" "}
            <img
              src="https://images.unsplash.com/photo-1744882838449-b3ad2ceff9a8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
              alt="Task Preview 3"
              className="rounded-xl shadow-lg object-cover h-64 w-full"
            />
          </div>
        </section>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:-mt-50">
          <Link
            href="/login"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
          <Link
            href="/about"
            className="text-blue-600 border border-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition"
          >
            Learn More
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 py-2 grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          {
            title: "Task Management",
            description:
              "Add, edit, and delete tasks easily to stay on top of your goals.",
          },
          {
            title: "Daily Planning",
            description: "Organize your day and prioritize what truly matters.",
          },
          {
            title: "Progress Tracking",
            description: "Visualize your accomplishments and stay motivated.",
          },
        ].map((feature) => (
          <div
            key={feature.title}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center text-sm py-6 text-gray-500">
        &copy; {new Date().getFullYear()} TaskMate. All rights reserved.
      </footer>
    </div>
  );
}
