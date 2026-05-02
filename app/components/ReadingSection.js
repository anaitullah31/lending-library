import ReadingChallengeCard from "./ReadingChallengeCard";
import UpcomingEventsCard from "./UpcomingEventsCard";

export default function ReadingSection() {
  return (
    <section className="bg-[#f7f7f7] px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-[2fr_1fr]">
        <ReadingChallengeCard />
        <UpcomingEventsCard />
      </div>
    </section>
  );
}