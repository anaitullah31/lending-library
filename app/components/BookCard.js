import Image from "next/image";
import Link from "next/link";

export default function BookCard({ book }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
      <Image
        src={book.image_url}
        alt={book.title}
        width={400}
        height={500}
        className="w-full h-72 object-cover"
      />

      <div className="p-5">
        <p className="text-xs uppercase text-gray-500 mb-2">
          {book.category}
        </p>

        <h3 className="text-xl font-bold text-black line-clamp-1">
          {book.title}
        </h3>

        <p className="text-gray-500 mt-1">{book.author}</p>

        <p className="text-sm text-gray-600 mt-3">
          {book.available_quantity} copies available
        </p>

        <Link
          href={`/all-books/${book.id}`}
          className="inline-block mt-5 w-full text-center bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}