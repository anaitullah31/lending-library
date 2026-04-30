import BookCard from "./BookCard";
import { loadAllBooks } from "./lib/utils";

const FeaturedBooks = async () => {
  const laodedBooks = await loadAllBooks();
  const books = laodedBooks.slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto">
      <div>Title</div>
      <div className="grid md:grid-cols-4">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedBooks;
