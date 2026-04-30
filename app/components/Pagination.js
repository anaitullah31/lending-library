export default function Pagination() {
  return (
    <div className="mt-12 flex justify-center gap-3">
      {[1, 2, 3].map((page) => (
        <button
          key={page}
          className={`w-10 h-10 rounded-full ${
            page === 1
              ? "bg-[#170C79] text-white"
              : "text-gray-500 hover:bg-gray-100"
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
