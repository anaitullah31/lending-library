import BookGrid from "../components/BookGrid.jsx";
import FiltersSidebar from "../components/FiltersSidebar";
import Pagination from "../components/Pagination.js";


export default function AllBooksPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main className="max-w-7xl mx-auto flex gap-6 py-12">
        <FiltersSidebar />

        <div className="flex-1">
          <BookGrid />
          <Pagination />
        </div>
      </main>
    </div>
  );
}
