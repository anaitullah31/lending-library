import Image from "next/image";
import { Bookmark } from "lucide-react";
import Link from "next/link";

export default function BookCard({ book }) {
  return (
    <div className="rounded-lg border border-[#000000] bg-white p-3 shadow-sm flex flex-col">
      <div className="relative overflow-hidden rounded-md flex-1">
        <Image
          src={book?.image_url}
          alt={book?.title || "Book image"}
          width={270}
          height={340}
          unoptimized
          className="h-full rounded-md object-cover"
        />

        <button className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md">
          <Bookmark size={20} className="text-gray-700" />
        </button>
      </div>

      <div className="mt-3">
        <h3 className="font-serif text-[17px] font-semibold text-[#06113c]">
          {book.title}
        </h3>

        <p className="mt-1 text-[16px] text-[#000000]">{book.author}</p>
      </div>

      <Link
        href={`/all-books/${book.id}`}
        className="mt-6 w-full rounded-lg border border-[#000000] py-3 text-[16px] font-medium text-[#000000] transition hover:bg-[#000000] hover:text-white"
      >
        View Details
      </Link>
    </div>
  );
}
