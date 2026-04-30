import { Award, BarChart3, Clock } from "lucide-react";

function ReadingChallengeCard() {
  return (
    <div className="rounded-2xl border border-[#000000] bg-[#ffffff] p-8 shadow-sm flex flex-col">
      <div className="flex flex-1 items-start justify-between">
        <div className="">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ffffff]">
              <Award size={20} className="text-[#000000]" />
            </div>
            <h3 className="font-serif text-lg text-[#001942]">
              Reading Challenges
            </h3>
          </div>

          <div className="mt-8 flex items-center justify-between gap-4">
            <p className="font-serif text-lg text-[#000000]">
              Spring Reading Goal
            </p>
            <p className="text-lg text-[#000000]">5 / 12 Books Read</p>
          </div>

          <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-[#eeeef3]">
            <div className="h-full w-[42%] rounded-full bg-[#000000]" />
          </div>

          <p className="mt-4 text-base text-[#000000]">
            You&apos;re on track! Only 7 more books to reach your seasonal
            milestone.
          </p>
        </div>
        <div className="hidden rounded-xl bg-[#000000] p-4 md:block">
          <BarChart3 size={58} className="text-[#ffffff]" />
        </div>
      </div>

      <button className="mt-10 w-60 px-8 rounded-md border border-[#000000] hover:border-[#FFFFFF] py-4 text-base font-medium text-[#000000] transition hover:bg-[#000000] hover:text-[#ffffff]">
        Explore All Events
      </button>
    </div>
  );
}
export default ReadingChallengeCard;
