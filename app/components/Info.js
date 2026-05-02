const Info = ({ label, value }) => {
  return (
    <div className="min-w-0">
      <p className="text-xs sm:text-sm text-gray-400 font-semibold mb-1">
        {label}
      </p>
      <p className="text-sm sm:text-base md:text-lg text-black font-semibold break-words">
        {value}
      </p>
    </div>
  );
};

export default Info;