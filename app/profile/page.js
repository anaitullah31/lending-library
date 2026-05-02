"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import EditButton from "../components/EditButton";
import Info from "../components/Info";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProfilePage = () => {
  const { data, isPending } = authClient.useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !data) {
      router.push("/login");
    }
  }, [data, isPending, router]);

  if (isPending) {
    return <p className="text-center py-20">Loading...</p>;
  }

  if (!data) return null;

  const user = data?.user;

  return (
    <main className="bg-white px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
      <section className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-black mb-6">
          Account Settings
        </h1>

        <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-sm shadow-sm">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-7">
            My Profile
          </h2>

          {/* Profile Card */}
          <div className="border border-gray-200 rounded-2xl p-4 sm:p-6 mb-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6 text-center sm:text-left">
              <Image
                src={user?.image || "/default-avatar.png"}
                alt="Profile"
                width={90}
                height={90}
                className="rounded-full object-cover w-24 h-24 mx-auto sm:mx-0"
              />

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-black break-words">
                  {user?.name || "N/A"}
                </h3>
                <p className="text-gray-700 font-medium mt-1">Member</p>
                <p className="text-gray-400">Kuala Lumpur, Malaysia</p>
              </div>
            </div>

            <EditButton />
          </div>

          {/* Personal Info */}
          <div className="border border-gray-200 rounded-2xl p-4 sm:p-6 mb-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-7">
              <h3 className="text-xl sm:text-2xl font-bold">
                Personal Information
              </h3>
              <EditButton />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 sm:gap-y-8 gap-x-6">
              <Info label="First Name" value={user?.name || "N/A"} />
              <Info label="Last Name" value="N/A" />
              <Info label="Email Address" value={user?.email || "N/A"} />
              <Info label="Phone" value="N/A" />
              <Info label="Role" value="Member" />
            </div>
          </div>

          {/* Address */}
          <div className="border border-gray-200 rounded-2xl p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-7">
              <h3 className="text-xl sm:text-2xl font-bold">Address</h3>
              <EditButton />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 sm:gap-y-8 gap-x-6">
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