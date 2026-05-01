import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-[#ffffff] min-h-155 px-6 py-8 md:py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <div className="md:pr-16 md:border-r border-[#ddd6c8]">
          <p className="uppercase tracking-[0.25em] text-[#3d3b39] text-sm font-semibold mb-4">
            Curated Knowledge
          </p>

          <h1 className="text-[#4b4035] text-lg md:text-xl font-semibold mb-6">
            Find Your Next Read
          </h1>

          <p className="text-[#22201f] italic text-sm md:text-base leading-7 max-w-md mb-8">
            Dive into a sanctuary of silent wisdom. Our curated archive spans
            centuries of thought, preserved with care for the modern
            intellectual.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/login"
              className="bg-[#ffffff] text-black border  border-[#000000] px-8 py-3 text-sm font-semibold hover:bg-[#000000] transition  hover:border-white hover:text-white"
            >
              Begin Exploration
            </Link>

            <Link
              href="/all-books"
              className="border border-[#000000] text-[#000000] px-8 py-3 text-sm font-semibold hover:bg-[#000000] hover:border-white hover:text-white transition"
            >
              Browse Now
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <div className="relative w-full h-105 md:h-130 ">
            <Image
              src="/book1.jpg"
              alt="Book on wooden shelf"
              fill
              priority
              className="object-cover rounded-md"
            />
          </div>

          <p className="mt-8 text-[#363431] italic text-sm font-semibold leading-6">
            “Silence is the sleep that nourishes wisdom.”
            <br />– Francis Bacon
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
