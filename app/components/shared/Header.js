import Link from "next/link";
import Image from "next/image";
import { Avatar } from "@heroui/react";
import { Person } from "@gravity-ui/icons";

const Header = () => {
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-gray-800 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <header className="flex min-h-16 items-center justify-between gap-4 px-4 md:px-6 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-books.png"
              alt="Logo"
              width={45}
              height={45}
              className="w-10 h-10 md:w-12 md:h-12"
            />
            <span className="text-lg md:text-2xl text-lime-400 uppercase font-black whitespace-nowrap">
              L Library
            </span>
          </Link>

          {/* Menu */}
          <ul className="hidden md:flex items-center gap-6">
            <li>
              <Link href="/" className="hover:text-lime-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/all-books"
                className="hover:text-lime-400 transition"
              >
                All Books
              </Link>
            </li>
          </ul>

          {/* Right */}
          <div className="flex items-center gap-3 md:gap-4">
            <Link
              href="/login"
              className="text-sm md:text-base hover:text-lime-400 transition"
            >
              Login
            </Link>

            <Avatar className="w-8 h-8 md:w-10 md:h-10">
              <Person />
            </Avatar>
          </div>
        </header>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center justify-center gap-6 border-t border-gray-800 py-3 text-sm">
          <Link href="/" className="hover:text-lime-400 transition">
            Home
          </Link>
          <Link href="/all-books" className="hover:text-lime-400 transition">
            All Books
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
