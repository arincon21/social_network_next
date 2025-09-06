"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Sliders, MoreHorizontal, MessageSquare, X } from "lucide-react";

type Friend = {
  id: string;
  name: string;
  status: string;
  avatar?: string;
  presence?: "online" | "away" | "offline" | "invisible";
};

const sampleSections: { title: string; friends: Friend[] }[] = [
  {
    title: "AMIGOS CERCANOS",
    friends: [
      { id: "1", name: "Carol Summers", status: "EN LÍNEA", avatar: "https://placehold.co/48x48", presence: "online" },
      { id: "2", name: "Mathilda Brinker", status: "¡EN EL TRABAJO!", avatar: "https://placehold.co/48x48", presence: "online" },
      { id: "3", name: "Michael Maximoff", status: "AUSENTE", avatar: "https://placehold.co/48x48", presence: "away" },
      { id: "4", name: "Rachel Howlett", status: "DESCONECTADO", avatar: "https://placehold.co/48x48", presence: "offline" },
    ],
  },
  {
    title: "MI FAMILIA",
    friends: [{ id: "5", name: "Sarah Hetfield", status: "EN LÍNEA", avatar: "https://placehold.co/48x48", presence: "online" }],
  },
  {
    title: "SIN CATEGORÍA",
    friends: [
      { id: "6", name: "Bruce Peterson", status: "EN LÍNEA", avatar: "https://placehold.co/48x48", presence: "online" },
      { id: "7", name: "Chris Greyson", status: "AUSENTE", avatar: "https://placehold.co/48x48", presence: "away" },
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
    <aside className={`fixed flex flex-col top-[70px] right-0 z-20 h-[calc(100vh-70px)] bg-white shadow-[0_0_34px_0_rgba(63,66,87,0.1)] transition-all duration-300 ease-in-out overflow-hidden ${collapsed ? "w-[70px]" : "w-[320px]"}`}>
      
      {/* Content area: avatars when collapsed, full list when expanded */}
      <div className="flex-1 overflow-y-auto w-full">
        {collapsed ? (
          <div className="flex flex-col items-center gap-4 py-4">
            {sampleSections
              .flatMap((s) => s.friends)
              .map((f) => (
                <div key={f.id} title={f.name} className="relative">
                  <div className="relative">
                    <div className="w-[40px] h-[40px] rounded-full overflow-hidden flex-shrink-0">
                      <Image src={f.avatar || "https://placehold.co/40x40"} alt={f.name} width={40} height={40} className="object-cover" unoptimized />
                    </div>
                    <span
                      className={`absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-white z-10 ${f.presence === "online"
                          ? "bg-[#2ecc71]"
                          : f.presence === "away"
                            ? "bg-[#ffcc4d]"
                            : f.presence === "offline"
                              ? "bg-[#ff6b6b]"
                              : "bg-[#cfd6e6]"
                        }`}
                    />
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className="px-4 pb-4  space-y-4 min-h-full flex flex-col justify-between">
            <div className="h-full">
              {/* Sections */}
              {sampleSections.map((section) => (
                <div key={section.title}>
                  <div className="flex items-center justify-between text-xs uppercase text-[#bfc3d8] py-2">
                    <span>{section.title}</span>
                    <button className="text-[#8f92a3] p-1 rounded-md hover:bg-gray-50">
                      <Sliders size={14} />
                    </button>
                  </div>

                  <div className="space-y-2">
                    {section.friends.map((f) => (
                      <div
                        key={f.id}
                        className="flex items-center justify-between gap-3 px-2 py-2 rounded-md hover:bg-gray-50"
                      >
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                              <Image src={f.avatar || "https://placehold.co/40x40"} alt={f.name} width={40} height={40} className="object-cover" unoptimized />
                            </div>
                            <span
                              className={`absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-white z-10 ${f.presence === "online"
                                  ? "bg-[#2ecc71]"
                                  : f.presence === "away"
                                    ? "bg-[#ffcc4d]"
                                    : f.presence === "offline"
                                      ? "bg-[#ff6b6b]"
                                      : "bg-[#cfd6e6]"
                                }`}
                            />
                          </div>
                          <div className="min-w-0">
                            <div className="font-semibold text-sm text-[#2e3350] truncate">{f.name}</div>
                            <div className="text-xs uppercase text-[#9aa0b3]">{f.status}</div>
                          </div>
                        </div>
                        <MoreHorizontal size={18} className="text-[#bfc3d8]" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {/* Search + controls */}
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Buscar amigos..."
                className={`flex-1 h-10 px-3 rounded-md border border-[#e6e8f2] text-sm text-[#4b4f66] focus:outline-none focus:ring-2 focus:ring-[#d9ccff] transition-all ${showContent ? "opacity-100" : "opacity-0"
                  }`}
              />
              <button className="p-2 text-[#8f92a3] rounded-md hover:bg-gray-50">
                <Sliders size={18} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className={`${showContent ? "w-full h-[70px]" : "py-6 flex items-center justify-center"} w-full h-[70px]`}>
        {showContent ? (
          <button className="w-full px-6 h-[70px] bg-[#6b43d6] text-white flex items-center justify-between">
            <div className="font-semibold">OLYMPUS CHAT</div>
            <X size={25} className="cursor-pointer" onClick={() => setCollapsed(true)}/>
          </button>
        ) : (
          <button className="w-full h-[70px] bg-[#6b43d6] cursor-pointer flex items-center justify-center text-white" onClick={() => setCollapsed(false)}>
            <MessageSquare size={25} />
          </button>
        )}
      </div>
    </aside>
  );
};

export default SidebarRight;