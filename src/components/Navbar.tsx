import React from "react";
import Image from "next/image";
import { Search, Bell, MessageSquare, CheckSquare, ChevronDown } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-20 h-[70px] bg-[#3f4257] shadow-md">
      <div className="max-w-[1200px] mx-auto h-full px-4 flex items-center justify-between gap-4">
        {/* Left: Page title / logo */}
        <div className="flex items-center gap-4">
          <div className="w-3 h-10 bg-[#f36b3c] rounded-sm" aria-hidden />
          <div className="text-white font-bold tracking-wider text-xl">NEWSFEED</div>
        </div>

        {/* Center: Search */}
        <div className="flex-1 mx-4">
          <div className="relative">
            <input
              aria-label="Buscar"
              placeholder="Search here people or pages..."
              className="w-full h-10 rounded-md bg-[#47495f] text-sm text-gray-200 placeholder:text-gray-400 pl-4 pr-10 focus:outline-none focus:ring-1 focus:ring-[#6b6f8a]"
            />
            <span className="absolute inset-y-0 right-3 flex items-center text-gray-300">
              <Search size={18} />
            </span>
          </div>
        </div>

        {/* Right: icons + profile */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4 text-gray-200">
            <div className="relative">
              <button className="p-2 rounded-full hover:bg-[#4a4d62]">
                <CheckSquare size={18} />
              </button>
              <span className="absolute -top-1 -right-1 bg-[#2ecc71] text-[10px] text-white rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                6
              </span>
            </div>

            <div className="relative">
              <button className="p-2 rounded-full hover:bg-[#4a4d62]">
                <MessageSquare size={18} />
              </button>
              <span className="absolute -top-1 -right-1 bg-[#7f5af0] text-[10px] text-white rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                2
              </span>
            </div>

            <div className="relative">
              <button className="p-2 rounded-full hover:bg-[#4a4d62]">
                <Bell size={18} />
              </button>
              <span className="absolute -top-1 -right-1 bg-[#ff6b6b] text-[10px] text-white rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                8
              </span>
            </div>
          </div>

          {/* Profile */}
          <div className="flex items-center gap-3 bg-[#45475f] px-3 py-1 rounded-md hover:bg-[#4a4d62]">
            <div className="relative w-10 h-10">
              <Image src="https://placehold.co/40x40" alt="Avatar" width={40} height={40} className="object-cover rounded-full" unoptimized />             
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#2ecc71] border-2 border-[#45475f] rounded-full" />
            </div>
            <div className="text-left text-gray-100">
              <div className="text-sm font-semibold">James Spiegel</div>
              <div className="text-[10px] text-gray-300 tracking-widest">SPACE COWBOY</div>
            </div>
            <ChevronDown size={18} className="text-gray-200" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
