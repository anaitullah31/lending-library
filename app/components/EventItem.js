import { Clock } from "lucide-react";

function EventItem({ day, date, title, time }) {
  return (
    <div className="flex gap-4 sm:gap-6 items-start">
      <div className="flex h-12 w-11 sm:h-14 sm:w-12 shrink-0 flex-col items-center justify-center rounded-md border border-gray-200 bg-gray-50">
        <span className="text-[9px] sm:text-[10px] uppercase text-[#7d8490]">
          {day}
        </span>
        <span className="text-xl sm:text-2xl font-bold text-[#001942]">
          {date}
        </span>
      </div>

      <div className="min-w-0">
        <h4 className="text-base sm:text-lg font-semibold text-[#001942] leading-snug">
          {title}
        </h4>

        <p className="mt-1 flex items-center gap-1 text-xs sm:text-sm text-[#5f5f5f]">
          <Clock size={14} className="shrink-0" />
          <span>{time}</span>
        </p>
      </div>
    </div>
  );
}

export default EventItem;