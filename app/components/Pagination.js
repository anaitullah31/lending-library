export default function Pagination() {
  return (
    <div className="flex justify-center gap-2 mt-10">
      <button className="px-4 py-2 border rounded-lg bg-white hover:bg-gray-100">
        Prev
      </button>

      <button className="px-4 py-2 border rounded-lg bg-black text-white">
        1
      </button>

      <button className="px-4 py-2 border rounded-lg bg-white hover:bg-gray-100">
        Next
      </button>
    </div>
  );
}