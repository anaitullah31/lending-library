"use client";

import Image from "next/image";
import { IoEyeOutline } from "react-icons/io5";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import SocialLoginButton from "../components/SocialLoginButton";
import { toast } from "react-toastify";

export default function LoginPage() {
  const router = useRouter();

  const handleForm = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
    });

    if (!data) {
      toast.error(`Please try again! ${error?.message}`, {
        position: "top-center",
      });
      return;
    }
    if (data) {
      router.refresh();
      router.push("/");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <section className="w-full max-w-7xl rounded-2xl bg-white flex overflow-hidden">
        {/* Left Illustration */}
        <div className="hidden lg:flex w-1/2 items-center justify-center p-8 xl:p-10">
          <Image
            src="/login-illustration.png"
            alt="Login illustration"
            width={520}
            height={520}
            priority
            className="w-full max-w-md xl:max-w-lg object-contain"
          />
        </div>

        {/* Right Card */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-md px-5 sm:px-8 lg:px-10 py-8 sm:py-12 lg:py-16">
            {/* Logo */}
            <div className="mb-6">
              <div className="h-10 w-10 rounded-full bg-black relative overflow-hidden">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white" />
                <div className="absolute top-0 left-1/2 h-full w-0.5 bg-white" />
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-black mb-3">
              Sign in
            </h1>

            <p className="text-sm sm:text-base text-gray-500 mb-6">
              Don’t have an account?{" "}
              <Link href="/signup" className="font-semibold text-black">
                Sign up
              </Link>
            </p>

            <SocialLoginButton />

            {/* Divider */}
            <div className="flex items-center gap-3 mb-7">
              <div className="h-px flex-1 bg-gray-300" />
              <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">
                or sign in with email
              </span>
              <div className="h-px flex-1 bg-gray-300" />
            </div>

            <form onSubmit={handleForm} className="space-y-5 sm:space-y-6">
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border-b-2 border-black outline-none py-2 text-sm sm:text-base"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Password
                </label>

                <div className="relative">
                  <input
                    type="password"
                    name="password"
                    required
                    className="w-full border-b-2 border-black outline-none py-2 pr-8 text-sm sm:text-base"
                  />
                  <IoEyeOutline className="absolute right-0 top-1/2 -translate-y-1/2 text-xl" />
                </div>
              </div>

              <div className="flex flex-col xs:flex-row sm:flex-row gap-3 sm:gap-0 sm:items-center sm:justify-between text-sm">
                <label className="flex items-center gap-2 text-black">
                  <input type="checkbox" className="h-4 w-4 accent-black" />
                  Remember me
                </label>

                <button type="button" className="text-gray-500 text-left">
                  Forgot?
                </button>
              </div>

              <button
                type="submit"
                className="w-full cursor-pointer bg-black text-white rounded-xl py-3 sm:py-4 font-medium shadow-md hover:bg-gray-900 transition"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
