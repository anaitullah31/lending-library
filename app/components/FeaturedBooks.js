import Link from "next/link";
import BookCard from "./BookCard";
import { loadAllBooks } from "./lib/utils";

const FeaturedBooks = async () => {
  const laodedBooks = await loadAllBooks();
  const books = laodedBooks.slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto py-16">
      <div className="flex justify-between items-center mb-3">
        <div className="">
          <h3 className="text-2xl">Featured Books</h3>
          <p>Hand-picked by our lead librarians this week</p>
        </div>
        <Link className="underline" href="/all-books">
          View All Collection
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-4">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedBooks;
