"use client";

import React, { useState, useEffect } from "react";
import {
  Zap,
  X,
  Menu,
  FileText,
  Star,
  Users,
  Headphones,
  Cloud,
  Calendar,
  Target,
  Gift,
  Activity,
  Grid,
} from "lucide-react";

const SidebarLeft: React.FC = () => {
  // start collapsed by default per request
  const [collapsed, setCollapsed] = useState(true);
  const [showLabels, setShowLabels] = useState(false);

  const items = [
    { key: "newsfeed", icon: FileText, label: "Newsfeed" },
    { key: "fav", icon: Star, label: "Fav Pages Feed" },
    { key: "groups", icon: Users, label: "Friend Groups" },
    { key: "music", icon: Headphones, label: "Music & Playlists" },
    { key: "weather", icon: Cloud, label: "Weather App" },
    { key: "calendar", icon: Calendar, label: "Calendar and Events" },
    { key: "badges", icon: Target, label: "Community Badges" },
    { key: "birthdays", icon: Gift, label: "Friends Birthdays" },
    { key: "stats", icon: Activity, label: "Account Stats" },
    { key: "widgets", icon: Grid, label: "Manage Widgets" },
  ];

  // Read persisted preference on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("sidebar-collapsed");
      if (saved !== null) {
        setCollapsed(saved === "true");
      }
    } catch {
      // ignore (e.g., privacy mode)
    }
  }, []);

  useEffect(() => {
    // Persist preference
    try {
      localStorage.setItem("sidebar-collapsed", String(collapsed));
    } catch {
      // ignore
    }

    // When expanding, wait until width transition finishes then show labels to avoid jumps.
    if (!collapsed) {
      const t = setTimeout(() => setShowLabels(true), 320);
      return () => clearTimeout(t);
    }
    // When collapsing, hide labels immediately so they slide away with no jump.
    setShowLabels(false);
    return undefined;
  }, [collapsed]);

  return (
    <aside
      className={`fixed top-0 left-0 z-20 h-full bg-white shadow-[0_0_34px_0_rgba(63,66,87,0.1)] transition-all duration-300 ease-in-out ${collapsed ? "w-[70px]" : "w-[320px]"
        }`}
    >
      {/* Top logo area */}
      <div
        className={`h-[70px] flex items-center bg-[#ff5e3a] transition-padding duration-200 ${collapsed ? "justify-center px-0" : "justify-start gap-3 px-4"
          }`}
      >
        <div className="flex items-center justify-center w-10 h-10 ml-3 mr-2">
          <Zap size={28} className="text-white" />
        </div>
        <div
          className={`text-white font-bold tracking-wider transition-all duration-200 overflow-hidden whitespace-nowrap ${showLabels ? "opacity-100 max-w-[200px]" : "opacity-0 max-w-0"
            }`}
        >
          OLYMPUS
        </div>
      </div>

      {/* Menu list */}
      <div className="mt-6 flex flex-col gap-2 px-2">
        {/* Collapse toggle */}
        <button
          onClick={() => setCollapsed((s) => !s)}
          aria-expanded={!collapsed}
          className="cursor-pointer group flex items-center w-full h-12 px-3 rounded-md text-[#8f92a3] hover:bg-gray-50 transition-colors"
        >
          <span className="flex items-center justify-center w-10 h-10 rounded-md text-[#8f92a3] group-hover:text-[#ff5e3a] transition-colors">
            {collapsed ? <Menu size={25} /> : <X size={25} />}
          </span>
          <span
            className={`ml-2 text-sm font-semibold transform transition-all duration-200 overflow-hidden whitespace-nowrap ${showLabels ? "opacity-100 max-w-[200px]" : "opacity-0 max-w-0"
              }`}
          >
            {showLabels ? "Collapse Menu" : ""}
          </span>
        </button>

        {items.map((it) => {
          const Icon = it.icon;
          return (
            <button
              key={it.key}
              title={collapsed ? it.label : undefined}
              className="cursor-pointer group flex items-center w-full h-12 px-3 rounded-md text-[#8f92a3] hover:bg-gray-50 transition-colors"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-md text-[#8f92a3] group-hover:text-[#ff5e3a] transition-colors">
                <Icon size={25} />
              </span>
              <span
                className={`ml-2 text-sm font-medium transform transition-all duration-200 overflow-hidden whitespace-nowrap ${showLabels ? "opacity-100 max-w-[220px]" : "opacity-0 max-w-0"
                  }`}
              >
                {it.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Bottom: profile completion */}
      {showLabels && (
        <div className={`absolute bottom-6 left-0 right-0 px-4 ${collapsed ? "text-center" : "text-left"}`}>
          <div className="mb-3 flex items-center justify-between text-sm text-[#6b6f8a]">
            <span>Profile Completion</span>
            <span className="font-semibold">76%</span>
          </div>
          <div className={`w-full bg-[#f1f2f6] rounded-full h-2 overflow-hidden ${collapsed ? "mx-auto w-8" : ""}`}>
            <div className="bg-[#ff5e3a] h-2 rounded-full" style={{ width: "76%" }} />
          </div>
          <p className="mt-3 text-sm text-[#9aa0b3]">
            Complete <span className="text-[#ff5e3a] font-medium">your profile</span> so people can
            know more about you!
          </p>
        </div>
      )}
    </aside>
  );
};

export default SidebarLeft;