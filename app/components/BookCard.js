import Image from "next/image";
import Link from "next/link";

export default function BookCard({ book }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition h-full flex flex-col">
      <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80">
        <Image
          src={book.image_url}
          alt={book.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <p className="text-xs uppercase text-gray-500 mb-2">
          {book.category}
        </p>

        <h3 className="text-lg sm:text-xl font-bold text-black line-clamp-1">
          {book.title}
        </h3>

        <p className="text-sm sm:text-base text-gray-500 mt-1 line-clamp-1">
          {book.author}
        </p>

        <p className="text-sm text-gray-600 mt-3">
          {book.available_quantity} copies available
        </p>

        <Link
          href={`/all-books/${book.id}`}
          className="inline-block mt-auto pt-5 w-full text-center"
        >
          <span className="block bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition">
            View Details
          </span>
        </Link>
      </div>
    </div>
  );
}