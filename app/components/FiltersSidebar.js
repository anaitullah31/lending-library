"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function FiltersSidebar({ books }) {
  const router = useRouter();
  const searchParams = useSearchParams();

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
    <aside className="w-64 shrink-0 hidden lg:flex flex-col gap-8 bg-white p-6 rounded-xl shadow-sm h-fit">
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
  );
}