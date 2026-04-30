import Image from "next/image";
import { Bookmark } from "lucide-react";

export default function BookCard({ book }) {
    const {image_url} = book;
    console.log(image_url);
    
  return (
    <div className="w-71.25 rounded-lg border border-[#000000] bg-white p-3 shadow-sm">
      <div className="relative overflow-hidden rounded-md">
        <Image
          src={book?.image_url}
          alt={book?.title || "Book image"}
          width={270}
          height={340}
          unoptimized
          className=" w-full object-cover"
        />

        <button className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md">
          <Bookmark size={20} className="text-gray-700" />
        </button>
      </div>

      <div className="mt-3">
        <h3 className="font-serif text-[17px] font-semibold text-[#06113c]">
          {book.title}
        </h3>

        <p className="mt-1 text-[16px] text-[#6f4b43]">{book.author}</p>
      </div>

      <button className="mt-6 w-full rounded-lg border border-[#9b781d] py-3 text-[16px] font-medium text-[#9b6b00] transition hover:bg-[#9b781d] hover:text-white">
        View Details
      </button>
    </div>
  );
}
