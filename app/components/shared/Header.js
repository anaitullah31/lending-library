"use client";
import Link from "next/link";
import Image from "next/image";
import { Avatar } from "@heroui/react";
import { Person } from "@gravity-ui/icons";
import { authClient } from "@/lib/auth-client";

const Header = () => {
  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch,
  } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };
  return (
    <nav className="py-4 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo-books.png" alt="Logo" width={32} height={32} />
        </Link>

        {/* Center: Navigation */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/all-books">All Books</Link>
          </li>
          {session && <li>
            <Link href="/profile">My Profile</Link>
          </li>}
        </ul>

        {/* Right: Auth */}
        <div className="flex items-center gap-4 text-sm">
          {user ? (
            <>
              <span className="text-black">{user.name}</span>
              <button
                onClick={handleSignOut}
                className="border border-black-400 px-3 py-1 rounded hover:bg-black-400"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="border border-black-400 px-3 py-1 rounded hover:bg-black-400"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
