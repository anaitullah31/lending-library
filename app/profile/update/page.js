"use client";

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

function UpdateProfile() {
  const { data, isPending } = authClient.useSession();
  if (!data) {
    return redirect("/login");
  }
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.photo.value;
    // const email = e.target.email.value;
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
    redirect("/profile");
  };

  return (
    <main className="min-h-[70vh] bg-[#ffffff] px-6 py-16">
      <section className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-10">
          <h1 className="text-3xl font-bold text-black mb-2">Update Profile</h1>

          <p className="text-gray-500 mb-8">
            Update your account information below.
          </p>

          <form onSubmit={handleUpdateProfile} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black focus:ring-1 focus:ring-black"
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
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black focus:ring-1 focus:ring-black"
              />
            </div>

            {/* <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black focus:ring-1 focus:ring-black"
              />
            </div> */}
            <button
              type="submit"
              className="w-full cursor-pointer bg-black text-white rounded-xl py-4 font-semibold shadow-md hover:bg-gray-900 transition"
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
