import BookGrid from "../components/BookGrid";
import FiltersSidebar from "../components/FiltersSidebar";
import Pagination from "../components/Pagination";
import { loadAllBooks } from "../../lib/utils";

export default async function AllBooksPage({ searchParams }) {
  const books = await loadAllBooks();
  const params = await searchParams;

  const selectedCategories = params?.category
    ? params.category.split(",")
    : [];

  const filteredBooks =
    selectedCategories.length > 0
      ? books.filter((book) => selectedCategories.includes(book.category))
      : books;

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="max-w-7xl mx-auto flex gap-6 py-12 px-6">
        <FiltersSidebar books={books} />

        <div className="flex-1">
          <BookGrid books={filteredBooks} />
          <Pagination />
        </div>
      </main>
    </div>
  );
}