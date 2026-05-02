"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const BookDetailsCard = ({ book }) => {
  const { data } = authClient.useSession();
  const router = useRouter();

  if (!book) {
    return <p className="text-center py-20">Book not found</p>;
  }

  const handleBorrowBook = (title) => {
    if (!data) {
      return router.push("/login");
    }

    toast.success(`${title} book has been added to your borrowed list`, {
      position: "top-center",
    });
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-14">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Image */}
        <div className="lg:col-span-4">
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none mx-auto aspect-[2/3]">
            <Image
              fill
              src={book.image_url}
              alt={book.title}
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover rounded-md shadow-xl"
            />
          </div>

          <div className="mt-6 flex flex-col sm:flex-row lg:flex-col gap-4">
            <button
              onClick={() => handleBorrowBook(book.title)}
              className="w-full cursor-pointer bg-black text-white py-3 sm:py-4 rounded-md font-medium hover:bg-[#0B0A2A] transition"
            >
              Borrow Digital Edition
            </button>

            <button className="w-full border border-black text-black py-3 sm:py-4 rounded-md font-medium hover:bg-[#f2f0ff] transition">
              Save to Library
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-8">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4">
            <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded text-xs uppercase tracking-widest">
              {book.available_quantity > 0 ? "Available" : "Unavailable"}
            </span>

            <span className="text-sm text-yellow-600 font-semibold">
              ★ 4.8
            </span>

            <span className="text-sm text-gray-500">
              ({book.available_quantity} copies available)
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0B0A2A] leading-tight">
            {book.title}
          </h1>

          <p className="mt-3 text-xl sm:text-2xl italic text-gray-600">
            {book.author}
          </p>

          <p className="mt-6 sm:mt-8 text-sm sm:text-base text-gray-600 leading-7 sm:leading-8">
            {book.description}
          </p>

          <hr className="my-8 sm:my-10" />

          <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0B0A2A] mb-6 sm:mb-8">
            Book Details
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 sm:gap-y-8 gap-x-6 lg:gap-x-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                Book ID
              </p>
              <p className="font-semibold text-[#0B0A2A] break-words">
                {book.id}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                Category
              </p>
              <p className="font-semibold text-[#0B0A2A]">{book.category}</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                Availability
              </p>
              <p className="font-semibold text-[#0B0A2A]">
                {book.available_quantity} Copies
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                Format
              </p>
              <p className="font-semibold text-[#0B0A2A]">
                Digital / Physical
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                Language
              </p>
              <p className="font-semibold text-[#0B0A2A]">English</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                Status
              </p>
              <p className="font-semibold text-[#0B0A2A]">
                {book.available_quantity > 0 ? "Ready to Borrow" : "Waitlist"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BookDetailsCard;