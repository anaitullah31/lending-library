function SocialButton({ children }) {
  return (
    <button
      className="w-full sm:w-auto 
                 h-11 sm:h-12 
                 px-4 sm:px-6 
                 rounded-xl 
                 border border-gray-200 
                 flex items-center justify-center gap-2 
                 text-sm sm:text-base 
                 shadow-sm 
                 hover:bg-gray-50 
                 transition"
    >
      {children}
    </button>
  );
}

export default SocialButton;