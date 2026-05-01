import { Pencil } from "lucide-react";
import Link from "next/link";

const EditButton = () => {
  return (
    <Link href="/profile/update" className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 text-gray-500 hover:bg-gray-100 transition">
      Edit <Pencil size={16} />
    </Link>
  );
};
export default EditButton;
