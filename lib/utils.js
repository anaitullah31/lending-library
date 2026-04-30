export const loadAllBooks = async () => {
  const res = await fetch(
    "https://lending-library-eight.vercel.app/books.json",
  );
  const data = await res.json();
  return data;
};
