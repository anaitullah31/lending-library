const Info = ({ label, value }) => {
  return (
    <div>
      <p className="text-gray-400 font-semibold mb-1">{label}</p>
      <p className="text-black font-semibold">{value}</p>
    </div>
  );
};

export default Info;
