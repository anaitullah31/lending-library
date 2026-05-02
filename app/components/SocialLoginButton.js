"use client";
import { FaGoogle } from "react-icons/fa6";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

const SocialLoginButton = () => {
  const handleGoogleSignIn = async () => {
    try {
      const data = await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });

      if (!data) {
        throw new Error("Login failed");
      }
    } catch (error) {
      toast.error(`Please try again! ${error.message}`, {
        position: "top-center",
      });
    }
  };

  return (
    <div className="mb-6 sm:mb-8">
      <button
        onClick={handleGoogleSignIn}
        className="w-full flex items-center justify-center gap-3 
                   border border-gray-300 
                   px-4 py-2.5 sm:py-3 
                   text-sm sm:text-base 
                   rounded-md 
                   hover:bg-black hover:text-white hover:border-white 
                   transition"
      >
        <FaGoogle className="text-base sm:text-lg" />
        <span className="hidden sm:inline">Continue with Google</span>
      </button>
    </div>
  );
};

export default SocialLoginButton;