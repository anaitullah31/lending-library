import Image from "next/image";

const Hero = () => {
  return (
    <section className="min-h-200 overflow-hidden md:py-20">
      {/* Background girl + orange wave */}
      {/* <Image
        src="/hero-bg.png"
        alt="Girl reading book"
        fill
        priority
        className=""
      /> */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 ">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.35fr_1fr]">
          {/* Left Content */}
          <div className="pt-12">
            <button className="mb-8 rounded-md bg-[#d8d8d8] px-4 py-2 text-sm font-medium text-[#15202b] shadow-sm">
              Explore Favourite Book
            </button>

            <h1 className="max-w-167.5 text-[64px] font-semibold leading-[1.12] tracking-[-2px] text-[#18212a] md:text-[82px]">
              A book a day <br />
              keeps boredom <br />
              away.
            </h1>
          </div>

          {/* Right Books Info */}
          <div className="flex justify-center pt-12 lg:justify-end">
            <div className="relative w-90">
              {/* Top stat */}
              <div className="absolute left-22 top-0 flex items-start gap-6">
                <h3 className="border-b-2 border-[#000000] text-2xl font-bold leading-none text-[#111]">
                  01
                </h3>

                <div className="-mt-3 text-sm leading-5 text-[#111]">
                  <p>+1000</p>
                  <p>E-books</p>
                </div>
              </div>

              {/* Bottom stat + books */}
              <div className="absolute left-0 top-17.5 flex items-start gap-5">
                <p className="mt-3 w-18.75 text-right text-sm font-medium leading-4 text-[#111]">
                  Lifetime <br /> access
                </p>

                <h3 className="mt-3 border-b-2 border-[#000000] text-2xl font-bold leading-none text-[#111]">
                  02
                </h3>

                <div className="flex gap-3">
                  <Image
                    src="/book1.jpg"
                    width={125}
                    height={185}
                    alt="When Genius Failed"
                    className="h-46.25 w-31.25 object-cover shadow-lg"
                  />

                  <Image
                    src="/book2.jpg"
                    width={125}
                    height={185}
                    alt="Hooked"
                    className="h-46.25 w-31.25 object-cover shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
