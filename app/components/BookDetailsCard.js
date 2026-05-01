"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

const BookDetailsCard = ({ book }) => {
  const {data} = authClient.useSession();
  
  if (!book) {
    return <p className="text-center py-20">Book not found</p>;
  }
  const handleBorrowBook = (title) => {
    if(!data){
      return redirect("/login")
    }
    toast.success(`${title} book has been added to your borrowed list `, {
      position: "top-center",
    });
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Image */}
        <div className="lg:col-span-4">
          <Image
            width={600}
            height={600}
            src={book.image_url}
            alt={book.title}
            className="w-full aspect-2/3 object-cover rounded-md shadow-xl"
          />

          <div className="mt-6 flex flex-col gap-4">
            <button
              onClick={() => handleBorrowBook(book.title)}
              className="w-full cursor-pointer bg-[#030303] text-white py-4 rounded-md font-medium hover:bg-[#0B0A2A] transition"
            >
              Borrow Digital Edition
            </button>

            <button className="w-full border border-[#000000] text-[#000000] py-4 rounded-md font-medium hover:bg-[#f2f0ff] transition">
              Save to Library
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-8">
          <div className="flex items-center gap-4 mb-3">
            <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded text-xs uppercase tracking-widest">
              {book.available_quantity > 0 ? "Available" : "Unavailable"}
            </span>

            <span className="text-sm text-yellow-600 font-semibold">★ 4.8</span>

            <span className="text-sm text-gray-500">
              ({book.available_quantity} copies available)
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#0B0A2A]">
            {book.title}
          </h1>

          <p className="mt-3 text-2xl italic text-gray-600">{book.author}</p>

          <p className="mt-8 text-gray-600 leading-8">{book.description}</p>

          <hr className="my-10" />

          <h2 className="text-2xl font-serif font-bold text-[#0B0A2A] mb-8">
            Book Details
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                Book ID
              </p>
              <p className="font-semibold text-[#0B0A2A]">{book.id}</p>
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
              <p className="font-semibold text-[#0B0A2A]">Digital / Physical</p>
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
