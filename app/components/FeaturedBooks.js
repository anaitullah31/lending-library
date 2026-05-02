import Link from "next/link";
import { loadAllBooks } from "../../lib/utils";
import BookCard from "./BookCard";

const FeaturedBooks = async () => {
  const books = await loadAllBooks();
  // const books = loadedBooks.slice(0, 4);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-8">
        <div>
          <h3 className="text-2xl sm:text-3xl font-semibold">
            Featured Books
          </h3>
          <p className="mt-2 text-sm sm:text-base text-gray-600">
            Hand-picked by our lead librarians this week
          </p>
        </div>

        <Link
          className="underline text-sm sm:text-base font-medium"
          href="/all-books"
        >
          View All Collection
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedBooks;