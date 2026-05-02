import BookGrid from "../components/BookGrid";
import FiltersSidebar from "../components/FiltersSidebar";
import Pagination from "../components/Pagination";
import { loadAllBooks } from "../../lib/utils";

export default async function AllBooksPage({ searchParams }) {
  const books = await loadAllBooks();
  const params = await searchParams;

  const selectedCategories = params?.category ? params.category.split(",") : [];

  const filteredBooks =
    selectedCategories.length > 0
      ? books.filter((book) => selectedCategories.includes(book.category))
      : books;

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 shrink-0">
            <FiltersSidebar books={books} />
          </aside>

          {/* Books */}
          <section className="flex-1 min-w-0">
            <BookGrid books={filteredBooks} />
            <Pagination />
          </section>
        </div>
      </main>
    </div>
  );
}