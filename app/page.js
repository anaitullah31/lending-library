import Image from "next/image";
import FeaturedBooks from "./components/FeaturedBooks";
import ReadingSection from "./components/ReadingSection";

export default function Home() {
  return (
    <div>
      <FeaturedBooks />
      <ReadingSection />
    </div>
  );
}
