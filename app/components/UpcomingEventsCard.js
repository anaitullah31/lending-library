import EventItem from "./EventItem";

function UpcomingEventsCard() {
  return (
    <div className="rounded-2xl border border-black bg-white p-5 sm:p-6 lg:p-8 shadow-sm">
      <h3 className="font-serif text-base sm:text-lg text-black">
        Upcoming Events
      </h3>

      <div className="mt-5 sm:mt-7 space-y-5 sm:space-y-7">
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

      <button className="mt-6 sm:mt-8 lg:mt-10 w-full rounded-md border border-black py-3 sm:py-4 text-sm sm:text-base font-medium text-black transition hover:bg-black hover:text-white">
        Explore All Events
      </button>
    </div>
  );
}

export default UpcomingEventsCard;
