import { Award, BarChart3 } from "lucide-react";

function ReadingChallengeCard() {
  return (
    <div className="rounded-2xl border border-black bg-white p-5 sm:p-6 lg:p-8 shadow-sm flex flex-col">
      
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 flex-1">
        
        {/* Left Content */}
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white">
              <Award size={18} className="text-black sm:w-5 sm:h-5" />
            </div>
            <h3 className="font-serif text-base sm:text-lg text-[#001942]">
              Reading Challenges
            </h3>
          </div>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
            <p className="font-serif text-base sm:text-lg text-black">
              Spring Reading Goal
            </p>
            <p className="text-sm sm:text-base text-black">
              5 / 12 Books Read
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mt-4 h-2.5 sm:h-3 w-full overflow-hidden rounded-full bg-[#eeeef3]">
            <div className="h-full w-[42%] rounded-full bg-black" />
          </div>

          <p className="mt-4 text-sm sm:text-base text-black leading-relaxed">
            You&apos;re on track! Only 7 more books to reach your seasonal
            milestone.
          </p>
        </div>

        {/* Right Icon */}
        <div className="hidden md:flex items-center justify-center rounded-xl bg-black p-4">
          <BarChart3 size={48} className="text-white lg:w-[58px] lg:h-[58px]" />
        </div>
      </div>

      {/* Button */}
      <button className="mt-6 sm:mt-8 lg:mt-10 w-full sm:w-60 px-6 sm:px-8 py-3 sm:py-4 rounded-md border border-black text-sm sm:text-base font-medium text-black transition hover:bg-black hover:text-white">
        Explore All Events
      </button>
    </div>
  );
}

export default ReadingChallengeCard;