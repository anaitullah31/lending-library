import { loadAllBooks } from "../../lib/utils";

export default async function FiltersSidebar() {
  const books = await loadAllBooks();
  const categories = [...new Set(books.map((book) => book.category))];
  return (
    <aside className="w-64 shrink-0 hidden lg:flex flex-col gap-8">
      <div>
        <h3 className="text-sm font-bold text-[#000000] uppercase mb-3">
          Genre
        </h3>

        {categories.map((item) => (
          <label key={item} className="flex items-center gap-3 mb-2">
            <input type="checkbox" className="accent-[#000000]" />
            <span className="text-gray-600">{item}</span>
          </label>
        ))}
      </div>

      <div>
        <h3 className="text-sm font-bold text-[#000000] uppercase mb-3">
          Availability
        </h3>

        {["All Titles", "Available Now"].map((item) => (
          <label key={item} className="flex items-center gap-3 mb-2">
            <input
              type="radio"
              name="availability"
              className="accent-[#170C79]"
            />
            <span className="text-gray-600">{item}</span>
          </label>
        ))}
      </div>

      <div>
        <h3 className="text-sm font-bold text-[#000000] uppercase mb-3">
          Publication Year
        </h3>

        <select className="w-full border px-3 py-2 rounded-md">
          <option>All Years</option>
          <option>2020 - Present</option>
          <option>2010 - 2019</option>
          <option>2000 - 2009</option>
        </select>
      </div>
    </aside>
  );
}
