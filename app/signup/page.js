"use client";
import Image from "next/image";
import Link from "next/link";
import { FaApple, FaFacebookF, FaGoogle, FaXTwitter } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { authClient } from "../../lib/auth-client";
import SocialButton from "../components/SocialButton";
import { redirect } from "next/navigation";

export default function RegisterPage() {
  const handleForm = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(name, photo, email, password);
    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
      // callbackURL: "/login",
    });
    console.log(data, error);
    if (data) {
      redirect("/login");
    }
  };

  return (
    <main className="flex items-center justify-center p-8">
      <section className="w-full max-w-7xl  rounded-2xl bg-[#ffffff]  flex overflow-hidden">
        {/* Left illustration */}
        <div className="hidden lg:flex w-1/2 items-center justify-center p-10">
          <Image
            src="/login-illustration.png"
            alt="Login illustration"
            width={520}
            height={520}
            className="object-contain"
          />
        </div>

        {/* Right card */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
          <div className="w-full max-w-md min-h-170 bg-white rounded-2xl shadow-md p-10">
            {/* Logo */}
            <div className="mb-6">
              <div className="h-10 w-10 rounded-full bg-black relative overflow-hidden">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white" />
                <div className="absolute top-0 left-1/2 h-full w-0.5 bg-white" />
              </div>
            </div>

            <h1 className="text-4xl font-bold text-black mb-3">Sign up</h1>

            <p className="text-sm text-gray-500 mb-6">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-black cursor-pointer"
              >
                Sign in
              </Link>
            </p>

            {/* Social buttons */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              <SocialButton>
                <FaGoogle className="text-lg" />
              </SocialButton>
              <SocialButton>
                <FaApple className="text-xl text-black" />
              </SocialButton>
              <SocialButton>
                <FaXTwitter className="text-lg text-black" />
              </SocialButton>
              <SocialButton>
                <FaFacebookF className="text-lg text-blue-600" />
              </SocialButton>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-7">
              <div className="h-px flex-1 bg-gray-300" />
              <span className="text-sm text-gray-500">
                or sign up with email
              </span>
              <div className="h-px flex-1 bg-gray-300" />
            </div>

            <form onSubmit={handleForm} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full border-b-2 border-black outline-none py-1 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Image URL
                </label>
                <input
                  name="photo"
                  type="text"
                  className="w-full border-b-2 border-black outline-none py-1 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full border-b-2 border-black outline-none py-1 text-sm"
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
                    className="w-full border-b-2 border-black outline-none py-1 pr-8 text-sm"
                  />
                  <IoEyeOutline className="absolute right-0 top-1/2 -translate-y-1/2 text-xl" />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-black">
                  <input type="checkbox" className="h-4 w-4 accent-black" />
                  Remember me
                </label>

                <button type="button" className="text-gray-500">
                  Forgot?
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white rounded-xl py-4 font-medium shadow-md hover:bg-gray-900 transition"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
