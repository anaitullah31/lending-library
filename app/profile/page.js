"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { Pencil } from "lucide-react";
import EditButton from "../components/EditButton";
import Info from "../components/Info";
import { redirect } from "next/navigation";

const ProfilePage = () => {
  const { data, isPending } = authClient.useSession();

  if (isPending) return <p className="text-center py-20">Loading...</p>;
  if(!data){
    return redirect("/login")
  }

  const user = data?.user;

  return (
    <main className=" bg-[#ffffff] px-6 py-8">
      <section className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-6">Account Settings</h1>

        <div className="bg-white p-8 rounded-sm shadow-sm">
          <h2 className="text-2xl font-bold mb-7">My Profile</h2>

          {/* Profile Card */}
          <div className="border border-gray-200 rounded-2xl p-6 mb-6 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Image
                src={user?.image || "/default-avatar.png"}
                alt="Profile"
                width={90}
                height={90}
                className="rounded-full object-cover w-22.5 h-22.5"
              />

              <div>
                <h3 className="text-3xl font-bold text-black">
                  {user?.name || "N/A"}
                </h3>
                <p className="text-gray-700 font-medium mt-1">Member</p>
                <p className="text-gray-400">Kuala Lumpur, Malaysia</p>
              </div>
            </div>

            <EditButton />
          </div>

          {/* Personal Info */}
          <div className="border border-gray-200 rounded-2xl p-6 mb-6">
            <div className="flex justify-between items-center mb-7">
              <h3 className="text-2xl font-bold">Personal information</h3>
              <EditButton />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8">
              <Info label="First Name" value={user?.name || "N/A"} />
              <Info label="Last Name" value="N/A" />
              <Info label="Email Address" value={user?.email || "N/A"} />
              <Info label="Phone" value="N/A" />
              <Info label="Role" value="Member" />
            </div>
          </div>

          {/* Address */}
          <div className="border border-gray-200 rounded-2xl p-6">
            <div className="flex justify-between items-center mb-7">
              <h3 className="text-3xl font-bold">Address</h3>
              <EditButton />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8">
              <Info label="Country" value="Malaysia" />
              <Info label="City/State" value="Kuala Lumpur" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProfilePage;
