"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../app/style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Hero = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
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
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              onAutoplayTimeLeft={onAutoplayTimeLeft}
              className="mySwiper"
            >
              <SwiperSlide>
                <Image
                  src="/book1.jpg"
                  alt="Book on wooden shelf"
                  fill
                  priority
                  className="object-cover rounded-md"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/book2.jpg"
                  alt="Book on wooden shelf"
                  fill
                  priority
                  className="object-cover rounded-md"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/book3.jpg"
                  alt="Book on wooden shelf"
                  fill
                  priority
                  className="object-cover rounded-md"
                />
              </SwiperSlide>
              <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                  <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
              </div>
            </Swiper>
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
