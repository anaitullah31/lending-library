"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../app/style.css";

const Hero = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
    }

    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-14">
        {/* Left Content */}
        <div className="order-2 lg:order-1 lg:pr-16 lg:border-r border-[#ddd6c8] text-center lg:text-left">
          <p className="uppercase tracking-[0.18em] sm:tracking-[0.25em] text-[#3d3b39] text-xs sm:text-sm font-semibold mb-4">
            Curated Knowledge
          </p>

          <h1 className="text-[#4b4035] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-5 leading-tight">
            Find Your Next Read
          </h1>

          <p className="text-[#22201f] italic text-sm sm:text-base md:text-lg leading-7 max-w-xl mx-auto lg:mx-0 mb-8">
            Dive into a sanctuary of silent wisdom. Our curated archive spans
            centuries of thought, preserved with care for the modern
            intellectual.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <Link
              href="/login"
              className="bg-white text-black border border-black px-6 sm:px-8 py-3 text-sm font-semibold hover:bg-black hover:border-black hover:text-white transition"
            >
              Begin Exploration
            </Link>

            <Link
              href="/all-books"
              className="border border-black text-black px-6 sm:px-8 py-3 text-sm font-semibold hover:bg-black hover:border-black hover:text-white transition"
            >
              Browse Now
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="order-1 lg:order-2 w-full">
          <div className="relative w-full h-[260px] xs:h-[320px] sm:h-[420px] md:h-[520px] lg:h-[560px]">
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
              className="mySwiper h-full rounded-md overflow-hidden"
            >
              <SwiperSlide>
                <Image
                  src="/book1.jpg"
                  alt="Book on wooden shelf"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </SwiperSlide>

              <SwiperSlide>
                <Image
                  src="/book2.jpg"
                  alt="Book on wooden shelf"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </SwiperSlide>

              <SwiperSlide>
                <Image
                  src="/book3.jpg"
                  alt="Book on wooden shelf"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
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

          <p className="mt-6 sm:mt-8 text-[#363431] italic text-xs sm:text-sm md:text-base font-semibold leading-6 text-center lg:text-left">
            “Silence is the sleep that nourishes wisdom.”
            <br />– Francis Bacon
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;