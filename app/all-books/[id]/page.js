import BookDetailsCard from "@/app/components/BookDetailsCard";
import { loadAllBooks } from "@/lib/utils";
import { Suspense } from "react";

const BookDetailsPage = async ({ params }) => {
  const { id } = await params;
  const books = await loadAllBooks();
  const singleBook = books.find((book) => book.id === parseInt(id));

  return (
    <>
      <Suspense fallback={<p>Loading book details</p>}>
        <BookDetailsCard book={singleBook} />
      </Suspense>
    </>
  );
};

export default BookDetailsPage;
