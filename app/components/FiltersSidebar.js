"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { SlidersHorizontal } from "lucide-react";
import { useState } from "react";

export default function FiltersSidebar({ books }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);

  const categories = [...new Set(books.map((book) => book.category))];

  const selectedCategories = searchParams.get("category")
    ? searchParams.get("category").split(",")
    : [];

  const handleCategoryChange = (category) => {
    const params = new URLSearchParams(searchParams.toString());
    let updatedCategories = [...selectedCategories];

    if (updatedCategories.includes(category)) {
      updatedCategories = updatedCategories.filter((item) => item !== category);
    } else {
      updatedCategories.push(category);
    }

    if (updatedCategories.length > 0) {
      params.set("category", updatedCategories.join(","));
    } else {
      params.delete("category");
    }

    router.push(`/all-books?${params.toString()}`);
  };

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border"
        >
          <span className="font-semibold text-black">Filters</span>
          <SlidersHorizontal size={20} />
        </button>

        {open && (
          <div className="mt-3 bg-white p-5 rounded-xl shadow-sm border">
            <h3 className="text-sm font-bold text-black uppercase mb-4">
              Genre
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {categories.map((item) => (
                <label key={item} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(item)}
                    onChange={() => handleCategoryChange(item)}
                    className="accent-black"
                  />
                  <span className="text-sm text-gray-600">{item}</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 shrink-0 flex-col gap-8 bg-white p-6 rounded-xl shadow-sm h-fit">
        <div>
          <h3 className="text-sm font-bold text-black uppercase mb-4">
            Genre
          </h3>

          {categories.map((item) => (
            <label key={item} className="flex items-center gap-3 mb-3">
              <input
                type="checkbox"
                checked={selectedCategories.includes(item)}
                onChange={() => handleCategoryChange(item)}
                className="accent-black"
              />
              <span className="text-gray-600">{item}</span>
            </label>
          ))}
        </div>
      </aside>
    </>
  );
}