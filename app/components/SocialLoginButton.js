"use client";
import { FaGoogle} from "react-icons/fa6";
import { authClient } from "@/lib/auth-client";

const SocialLoginButton = () => {
  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
    console.log(data, "Google signin");
  };
  return (
    <div className="mb-8">
      <button
        onClick={handleGoogleSignIn}
        className="cursor-pointer w-full flex flex-col items-center border p-3 hover:bg-black hover:text-white hover:border-white transition rounded-md"
      >
        <FaGoogle className="text-lg" />
      </button>
    </div>
  );
};

export default SocialLoginButton;
