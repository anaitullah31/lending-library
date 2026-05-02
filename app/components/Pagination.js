export default function Pagination() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-2 mt-8 sm:mt-10">
      <button className="px-3 sm:px-4 py-2 text-sm sm:text-base border rounded-lg bg-white hover:bg-gray-100 transition">
        Prev
      </button>

      <button className="px-3 sm:px-4 py-2 text-sm sm:text-base border rounded-lg bg-black text-white">
        1
      </button>

      <button className="px-3 sm:px-4 py-2 text-sm sm:text-base border rounded-lg bg-white hover:bg-gray-100 transition">
        Next
      </button>
    </div>
  );
}