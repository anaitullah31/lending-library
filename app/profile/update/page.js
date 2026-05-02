"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

function UpdateProfile() {
  const { data, isPending } = authClient.useSession();
  const router = useRouter();

  // ❗ Fix redirect (client component)
  useEffect(() => {
    if (!isPending && !data) {
      router.push("/login");
    }
  }, [data, isPending, router]);

  if (isPending) {
    return <p className="text-center py-20">Loading...</p>;
  }

  if (!data) return null;

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.photo.value;

    const { error } = await authClient.updateUser({
      image,
      name,
    });

    if (error) {
      toast.error("Update failed ❌", {
        position: "top-center",
      });
      return;
    }

    toast.success("Profile updated successfully ✅", {
      position: "top-center",
    });

    router.push("/profile"); // ✅ fixed
  };

  return (
    <main className="min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
      <section className="max-w-xl sm:max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5 sm:p-6 md:p-8 lg:p-10">
          
          <h1 className="text-2xl sm:text-3xl font-bold text-black mb-2">
            Update Profile
          </h1>

          <p className="text-sm sm:text-base text-gray-500 mb-6 sm:mb-8">
            Update your account information below.
          </p>

          <form onSubmit={handleUpdateProfile} className="space-y-5 sm:space-y-6">
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm sm:text-base outline-none focus:border-black focus:ring-1 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Photo URL
              </label>
              <input
                type="url"
                name="photo"
                placeholder="Enter photo URL"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm sm:text-base outline-none focus:border-black focus:ring-1 focus:ring-black"
              />
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer bg-black text-white rounded-xl py-3 sm:py-4 text-sm sm:text-base font-semibold shadow-md hover:bg-gray-900 transition"
            >
              Update Now
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default UpdateProfile;