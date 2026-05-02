import { Pencil } from "lucide-react";
import Link from "next/link";

const EditButton = () => {
  return (
    <Link
      href="/profile/update"
      className="inline-flex items-center justify-center gap-2 
                 border border-gray-300 rounded-full 
                 px-3 py-2 sm:px-4 sm:py-2.5 
                 text-sm sm:text-base 
                 text-gray-600 hover:bg-gray-100 
                 transition w-full sm:w-auto"
    >
      <span>Edit</span>
      <Pencil size={16} className="sm:w-[18px] sm:h-[18px]" />
    </Link>
  );
};

export default EditButton;