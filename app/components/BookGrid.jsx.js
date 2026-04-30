import BookCard from "./BookCard";
import { loadAllBooks } from "../lib/utils";
import { Input } from "@heroui/react";

export default async function BookGrid() {
  const books = await loadAllBooks();
  return (
    <section className="flex-1">
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-500">All Books</p>
        <div>
          <Input
            aria-label="Name"
            className="w-64 p-1 border rounded-md focus:border-0"
            placeholder="Enter your name"
          />
        </div>
        <select className="border px-3 py-2 rounded-md">
          <option>Most Relevant</option>
          <option>Newest First</option>
          <option>Title A-Z</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
}
