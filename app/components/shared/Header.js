"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
    setIsOpen(false);
  };

  return (
    <nav className="border-b border-gray-300 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo-books.png" alt="Logo" width={36} height={36} />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            <li>
              <Link href="/" className="hover:text-gray-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/all-books" className="hover:text-gray-600">
                All Books
              </Link>
            </li>
            {session && (
              <li>
                <Link href="/profile" className="hover:text-gray-600">
                  My Profile
                </Link>
              </li>
            )}
          </ul>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center gap-4 text-sm">
            {user ? (
              <>
                <span className="text-black font-medium">{user.name}</span>
                <button
                  onClick={handleSignOut}
                  className="border border-black px-4 py-2 rounded hover:bg-black hover:text-white transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className="border border-black px-4 py-2 rounded hover:bg-black hover:text-white transition"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-black transition ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-black transition ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-black transition ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-5">
            <ul className="flex flex-col gap-4 text-sm font-medium border-t border-gray-200 pt-5">
              <li>
                <Link href="/" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
              </li>

              <li>
                <Link href="/all-books" onClick={() => setIsOpen(false)}>
                  All Books
                </Link>
              </li>

              {session && (
                <li>
                  <Link href="/profile" onClick={() => setIsOpen(false)}>
                    My Profile
                  </Link>
                </li>
              )}

              <li className="pt-2">
                {user ? (
                  <div className="flex flex-col gap-3">
                    <span className="text-black font-medium">{user.name}</span>
                    <button
                      onClick={handleSignOut}
                      className="w-full border border-black px-4 py-2 rounded hover:bg-black hover:text-white transition text-left"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <Link
                    href="/login"
                    onClick={() => setIsOpen(false)}
                    className="inline-block border border-black px-4 py-2 rounded hover:bg-black hover:text-white transition"
                  >
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;