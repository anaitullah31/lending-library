import Image from "next/image";
import FeaturedBooks from "./components/FeaturedBooks";
import ReadingSection from "./components/ReadingSection";
import NewArrivalMarquee from "./components/NewArrivalMarquee";
import Hero from "./components/Hero";
import MembershipSection from "./components/MembershipSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedBooks />
      <NewArrivalMarquee />
      <MembershipSection />
      <ReadingSection />
    </div>
  );
}
