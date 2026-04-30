function SocialButton({ children }) {
  return (
    <button className="h-12 rounded-xl border border-gray-200 flex items-center justify-center shadow-sm hover:bg-gray-50 transition">
      {children}
    </button>
  );
}
export default SocialButton;
