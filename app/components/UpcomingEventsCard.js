import EventItem from "./EventItem";

function UpcomingEventsCard() {
  return (
    <div className="rounded-2xl border border-[#000000] bg-white p-8 shadow-sm">
      <h3 className="font-serif text-lg text-[#000000]">Upcoming Events</h3>

      <div className="mt-7 space-y-7">
        <EventItem
          day="Sat"
          date="18"
          title="Author Talk: Sarah J. Maas"
          time="10:00 AM"
        />

        <div className="h-px bg-gray-200" />

        <EventItem
          day="Fri"
          date="24"
          title="Poetry Slam Night"
          time="07:00 PM"
        />
      </div>

      <button className="mt-10 w-full rounded-md border border-[#000000] hover:border-[#FFFFFF] py-4 text-base font-medium text-[#000000] transition hover:bg-[#000000] hover:text-[#ffffff]">
        Explore All Events
      </button>
      
    </div>
  );
}
export default UpcomingEventsCard;
