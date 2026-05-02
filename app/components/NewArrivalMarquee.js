import Marquee from "react-fast-marquee";

export const newArrivals = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    price: 18,
    discount: 10,
    image: "/books/atomic-habits.jpg",
    category: "Self Development",
  },
  {
    id: 2,
    title: "The Midnight Library",
    author: "Matt Haig",
    price: 15,
    image: "/books/midnight-library.jpg",
    category: "Fiction",
  },
  {
    id: 3,
    title: "Deep Work",
    author: "Cal Newport",
    price: 20,
    discount: 15,
    image: "/books/deep-work.jpg",
    category: "Productivity",
  },
  {
    id: 4,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    price: 17,
    image: "/books/psychology-money.jpg",
    category: "Finance",
  },
  {
    id: 5,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    price: 14,
    discount: 20,
    image: "/books/rich-dad.jpg",
    category: "Finance",
  },
];

const NewArrivalMarquee = () => {
  const bookNames = newArrivals.map((book) => book.title).join("  •  ");

  return (
    <div className="bg-black text-white py-3 sm:py-4 md:py-5 lg:py-6 overflow-hidden">
      <Marquee
        speed={45}
        gradient={false}
        pauseOnHover={true}
        className="text-xs sm:text-sm md:text-base font-medium"
      >
        <span className="mx-4 sm:mx-6 whitespace-nowrap">
          New Arrivals: {bookNames}
        </span>

        <span className="mx-4 sm:mx-6 text-blue-300 whitespace-nowrap">
          Special Discount on Memberships 🎉
        </span>
      </Marquee>
    </div>
  );
};

export default NewArrivalMarquee;