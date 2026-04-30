import BookDetailsCard from "@/app/components/BookDetailsCard";
import { loadAllBooks } from "@/app/lib/utils";

const BookDetailsPage = async ({ params }) => {
  const { id } = await params;
  const books = await loadAllBooks();
  const singleBook = books.find((book) => book.id === parseInt(id));

  return <BookDetailsCard book={singleBook} />;
};

export default BookDetailsPage;
