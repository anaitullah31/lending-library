import { Input } from "@heroui/react";
import BookCard from "./BookCard";

export default function BookGrid({ books }) {
  if (!books || books.length === 0) {
    return (
      <div className="bg-white rounded-xl p-6 sm:p-10 text-center">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-700">
          No books found
        </h3>
        <p className="text-sm sm:text-base text-gray-500 mt-2">
          Try selecting another category.
        </p>
      </div>
    );
  }

  return (
    <section className="flex-1 min-w-0">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
        <p className="text-gray-500 text-sm sm:text-base">
          All Books
        </p>

        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          <Input
            aria-label="Book title"
            className="w-full sm:w-64 py-1 px-3 border rounded-md"
            placeholder="Enter book title"
          />

          <select className="w-full sm:w-auto border px-3 py-2 rounded-md bg-white">
            <option>Most Relevant</option>
            <option>Newest First</option>
            <option>Title A-Z</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
}