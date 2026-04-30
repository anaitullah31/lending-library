import { Clock } from "lucide-react";

function EventItem({ day, date, title, time }) {
  return (
    <div className="flex gap-6">
      <div className="flex h-14 w-12 shrink-0 flex-col items-center justify-center rounded-md border border-gray-200 bg-gray-50">
        <span className="text-[10px] uppercase text-[#7d8490]">{day}</span>
        <span className="text-2xl font-bold text-[#001942]">{date}</span>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-[#001942]">{title}</h4>
        <p className="mt-1 flex items-center gap-1 text-sm text-[#5f5f5f]">
          <Clock size={14} />
          {time}
        </p>
      </div>
    </div>
  );
}
export default EventItem;
