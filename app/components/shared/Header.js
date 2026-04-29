import { Link } from "@heroui/react";
import Image from "next/image";
import { Avatar } from "@heroui/react";
import { Person } from "@gravity-ui/icons";
const Header = () => {
  return (
    <nav className="sticky top-0 z-40 w-full border-b bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <header className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            {/* <Logo /> */}
            {/* <p className="font-bold">ACME</p> */}
            <Link href="/">
              <div className="flex items-center gap-2 text-2xl">
                <Image
                  src="/logo-books.png"
                  alt="Logo"
                  width={50}
                  height={50}
                />
                <span className="text-lime-400 uppercase font-black">L Library</span>
              </div>
            </Link>
          </div>
          <ul className="flex items-center gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="all-books">All Books</Link>
            </li>
          </ul>
          <div>
            <div className="flex items-center gap-4">
              <Link href="/login">Login</Link>
              <Avatar>
                <Avatar.Fallback>
                  <Person />
                </Avatar.Fallback>
              </Avatar>
            </div>
          </div>
        </header>
      </div>
    </nav>
  );
};

export default Header;
