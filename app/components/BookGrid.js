import { Input } from "@heroui/react";
import BookCard from "./BookCard";

export default function BookGrid({books}) {
  // const books = await loadAllBooks();

  if (!books || books.length === 0) {
    return (
      <div className="bg-white rounded-xl p-10 text-center">
        <h3 className="text-xl font-semibold text-gray-700">No books found</h3>
        <p className="text-gray-500 mt-2">Try selecting another category.</p>
      </div>
    );
  }

  return (
    <section className="flex-1">
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-500">All Books</p>
        <div>
          <Input
            aria-label="Name"
            className="w-64 py-1 px-3 border rounded-md focus:border-0"
            placeholder="Enter book title"
          />
        </div>
        <select className="border px-3 py-2 rounded-md">
          <option>Most Relevant</option>
          <option>Newest First</option>
          <option>Title A-Z</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
}
