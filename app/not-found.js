import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-4 sm:px-6">
      <div className="text-center max-w-md">
        <h1 className="text-5xl sm:text-6xl font-bold text-black mb-4">404</h1>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
          Page Not Found
        </h2>

        <p className="text-sm sm:text-base text-gray-500 mb-6">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        <Link
          href="/"
          className="inline-block bg-black text-white px-6 py-3 rounded-md text-sm sm:text-base hover:bg-gray-900 transition"
        >
          Go Back Home
        </Link>
      </div>
    </main>
  );
}
