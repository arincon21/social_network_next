import React from "react";
import Image from "next/image";
import { Search, Bell, MessageSquare, CheckSquare, ChevronDown } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-20 h-[70px] bg-[#3f4257] shadow-md">
      <div className="mx-auto h-full px-4 flex items-center gap-4">
       
        {/* Left: Page title / logo */}
        <div className="w-[300px] flex items-center gap-4 pl-[80px]">
          <div className="text-white font-bold tracking-wider text-xl">NEWSFEED</div>
        </div>

        {/* Center: Search */}
        <div className="flex-1 flex justify-center mx-4">
          <div className="relative w-full max-w-[600px] h-[70px]">
            <input
              aria-label="Buscar"
              placeholder="Search here people or pages..."
              className="w-full h-full bg-[#47495f] text-sm text-gray-200 placeholder:text-gray-400 pl-4 pr-10 outline-none"
            />
            <span className="absolute inset-y-0 right-3 flex items-center text-gray-300">
              <Search size={25} />
            </span>
          </div>
        </div>

        {/* Right: icons + profile */}
        <div className="flex-1 flex items-center justify-end gap-8 pr-[60px] h-full">
          <div className="flex items-center gap-3 text-gray-200">
            <div className="relative">
              <button className="p-2 rounded-full hover:bg-[#4a4d62] cursor-pointer">
                <CheckSquare size={20} />
              </button>
              <span className="absolute -top-1 -right-1 bg-[#2ecc71] text-[10px] text-white rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                6
              </span>
            </div>

            <div className="relative">
              <button className="p-2 rounded-full hover:bg-[#4a4d62] cursor-pointer">
                <MessageSquare size={20} />
              </button>
              <span className="absolute -top-1 -right-1 bg-[#7f5af0] text-[10px] text-white rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                2
              </span>
            </div>

            <div className="relative">
              <button className="p-2 rounded-full hover:bg-[#4a4d62] cursor-pointer">
                <Bell size={20} />
              </button>
              <span className="absolute -top-1 -right-1 bg-[#ff6b6b] text-[10px] text-white rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                8
              </span>
            </div>
          </div>

          {/* Profile */}
          <div className="flex items-center gap-3 px-3 py-1 hover:bg-[#4a4d62] cursor-pointer h-full">
            <div className="relative w-10 h-10">
              <Image src="https://placehold.co/35x35" alt="Avatar" width={35} height={35} className="object-cover rounded-full" unoptimized />             
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
