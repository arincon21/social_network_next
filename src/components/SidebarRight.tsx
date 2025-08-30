"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Sliders, MoreHorizontal, MessageSquare, X, Menu } from "lucide-react";

type Friend = {
  id: string;
  name: string;
  status: string;
  avatar?: string;
  presence?: "online" | "away" | "offline" | "invisible";
};

const sampleSections: { title: string; friends: Friend[] }[] = [
  {
    title: "CLOSE FRIENDS",
    friends: [
      { id: "1", name: "Carol Summers", status: "ONLINE", avatar: "https://placehold.co/48x48", presence: "online" },
      { id: "2", name: "Mathilda Brinker", status: "AT WORK!", avatar: "https://placehold.co/48x48", presence: "online" },
      { id: "3", name: "Michael Maximoff", status: "AWAY", avatar: "https://placehold.co/48x48", presence: "away" },
      { id: "4", name: "Rachel Howlett", status: "OFFLINE", avatar: "https://placehold.co/48x48", presence: "offline" },
    ],
  },
  {
    title: "MY FAMILY",
    friends: [{ id: "5", name: "Sarah Hetfield", status: "ONLINE", avatar: "https://placehold.co/48x48", presence: "online" }],
  },
  {
    title: "UNCATEGORIZED",
    friends: [
      { id: "6", name: "Bruce Peterson", status: "ONLINE", avatar: "https://placehold.co/48x48", presence: "online" },
      { id: "7", name: "Chris Greyson", status: "AWAY", avatar: "https://placehold.co/48x48", presence: "away" },
      { id: "8", name: "Nicholas Grisom", status: "INVISIBLE", avatar: "https://placehold.co/48x48", presence: "invisible" },
    ],
  },
];

const SidebarRight: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("sidebar-right-collapsed");
      if (saved !== null) setCollapsed(saved === "true");
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("sidebar-right-collapsed", String(collapsed));
    } catch {
      /* ignore */
    }

    if (!collapsed) {
      const t = setTimeout(() => setShowContent(true), 300);
      return () => clearTimeout(t);
    }
    setShowContent(false);
    return undefined;
  }, [collapsed]);

  return (
    <aside
      className={`fixed top-[70px] right-0 z-20 h-[calc(100vh-70px)] bg-white shadow-[0_0_34px_0_rgba(63,66,87,0.1)] transition-all duration-300 ease-in-out overflow-hidden ${
        collapsed ? "w-[70px]" : "w-[320px]"
      }`}
    >
      {/* Avatars column when collapsed */}
      <div className="flex flex-col items-center gap-4 py-4">
        {sampleSections
          .flatMap((s) => s.friends)
          .map((f) => (
            <div key={f.id} title={f.name} className="relative">
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 relative">
                <Image src={f.avatar || "https://placehold.co/48x48"} alt={f.name} width={48} height={48} className="object-cover" unoptimized />
              </div>
              <span
                className={`absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-white ${
                  f.presence === "online"
                    ? "bg-[#2ecc71]"
                    : f.presence === "away"
                    ? "bg-[#ffcc4d]"
                    : f.presence === "offline"
                    ? "bg-[#ff6b6b]"
                    : "bg-[#cfd6e6]"
                }`}
              />
            </div>
          ))}
      </div>

      {/* small menu icon when collapsed (above footer) */}
      {collapsed && (
        <div className="flex justify-center py-2">
          <button aria-label="Open menu" className="p-2 rounded-md text-[#9aa0b3] hover:bg-gray-100">
            <Menu size={20} />
          </button>
        </div>
      )}

      {/* Expanded content */}
      <div className={`px-4 ${showContent ? "block" : "hidden"}`}>
        <div className="flex justify-end py-2">
          <button aria-label="Collapse menu" className="p-2 rounded-md text-[#9aa0b3] hover:bg-gray-100" onClick={() => setCollapsed(true)}>
            <X size={16} />
          </button>
        </div>

        <div className="overflow-y-auto h-[calc(100vh-240px)]">
          {sampleSections.map((section) => (
            <div key={section.title} className="mb-6 border-b border-[#eeeeef] pb-4">
              <div className="flex items-center justify-between py-3">
                <div className="text-sm text-[#9aa0b3] font-semibold">{section.title}</div>
                <div className="text-sm text-[#9aa0b3] font-semibold">SETTINGS</div>
              </div>

              <div className="flex flex-col gap-4">
                {section.friends.map((f) => (
                  <div key={f.id} className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 relative">
                        <Image src={f.avatar || "https://placehold.co/48x48"} alt={f.name} width={48} height={48} className="object-cover" unoptimized />
                      </div>
                      <span
                        className={`absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-white ${
                          f.presence === "online"
                            ? "bg-[#2ecc71]"
                            : f.presence === "away"
                            ? "bg-[#ffcc4d]"
                            : f.presence === "offline"
                            ? "bg-[#ff6b6b]"
                            : "bg-[#cfd6e6]"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-[#39424b]">{f.name}</div>
                      <div className="text-xs text-[#9aa0b3] uppercase">{f.status}</div>
                    </div>
                    <div className="text-[#bfc6d6]">
                      <MoreHorizontal size={18} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Search friends and controls */}
        <div className="mt-2 flex items-center gap-3">
          <input
            aria-label="Search Friends"
            placeholder="Search Friends..."
            className="flex-1 h-10 rounded-md border border-[#eef0f4] px-3 text-sm text-[#6b6f80] placeholder:text-[#c7cbd8] focus:outline-none"
          />
          <button className="p-2 rounded-md bg-white border border-[#eef0f4] text-[#9aa0b3] hover:bg-[#fafbff]">
            <Sliders size={16} />
          </button>
          <button className="p-2 rounded-md bg-white border border-[#eef0f4] text-[#9aa0b3] hover:bg-[#fafbff]" onClick={() => setCollapsed((s) => !s)}>
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className={`mt-auto ${showContent ? "pt-6 px-4" : "py-6 flex items-center justify-center"}`}>
        {showContent ? (
          <button className="w-full bg-[#6b43d6] text-white rounded-md px-4 py-3 flex items-center justify-between" onClick={() => setCollapsed(true)}>
            <div className="font-semibold">OLYMPUS CHAT</div>
            <MessageSquare size={18} />
          </button>
        ) : (
          <button className="w-12 h-12 bg-[#6b43d6] rounded-md flex items-center justify-center text-white" onClick={() => setCollapsed(false)}>
            <MessageSquare size={18} />
          </button>
        )}
      </div>
    </aside>
  );
};

export default SidebarRight;