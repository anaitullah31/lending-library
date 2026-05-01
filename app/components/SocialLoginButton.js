"use client";
import React from "react";
import SocialButton from "./SocialButton";
import { FaApple, FaFacebookF, FaGoogle, FaXTwitter } from "react-icons/fa6";
import { authClient } from "@/lib/auth-client";

const SocialLoginButton = () => {
  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };
  return (
    <div className="mb-8">
      <button
        onClick={handleGoogleSignIn}
        className="cursor-pointer w-full flex flex-col items-center border p-3 hover:bg-black hover:text-white hover:border-white transition rounded-md"
      >
        <FaGoogle className="text-lg" />
      </button>
      {/* <SocialButton>
        <FaApple className="text-xl text-black" />
      </SocialButton>
      <SocialButton>
        <FaXTwitter className="text-lg text-black" />
      </SocialButton>
      <SocialButton>
        <FaFacebookF className="text-lg text-blue-600" />
      </SocialButton> */}
    </div>
  );
};

export default SocialLoginButton;
