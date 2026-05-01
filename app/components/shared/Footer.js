import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Image src="/logo-books.png" alt="Logo" width={50} height={50} />
              <span className="text-white-400 uppercase">Lending Library</span>
            </div>

            <h3 className="text-sm font-medium mb-1">Contact Us</h3>
            <div className="w-8 h-0.5 bg-white mb-5"></div>

            <p className="text-sm text-gray-300">lending-library@email.com</p>
            <p className="text-sm text-gray-300">+60 234 567 888</p>

            <div className="mt-12">
              <h3 className="text-sm font-medium mb-4">Social Media</h3>

              <div className="flex gap-3">
                {["𝕏", "f", "◎", "Be"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-sm "
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="md:pl-20">
            <h3 className="text-sm font-medium mb-1">Services</h3>
            <div className="w-8 h-0.5 bg-white mb-5"></div>

            <ul className="space-y-3 text-sm text-gray-300">
              <li>• Browse Book Collection</li>
              <li>• Borrow & Return Books</li>
              <li>• Digital eBook Access</li>
              <li>• Membership Plans</li>
              <li>• Book Reservations</li>
              <li>• Reading History</li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-sm font-medium mb-1">Location</h3>
            <div className="w-8 h-0.5 bg-white mb-5"></div>

            <div className="space-y-6 text-sm text-gray-300">
              <div>
                <p className="text-white font-medium">Kuala Lumpur, Malaysia</p>
                <p>Hybrid Library (Physical & Digital Access)</p>
              </div>

              <div>
                <p className="text-white font-medium">Malaysia</p>
                <p>585 West 500 south,</p>
                <p>Suite 130 Bountiful, Salt</p>
                <p>Lake City, Utah 84010</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center text-sm text-gray-300 mt-16 pt-6 border-t border-zinc-900">
          © Copyright 2026. All rights reserved.{" "}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
