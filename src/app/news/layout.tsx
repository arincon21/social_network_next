import type { Metadata } from "next";
import "../../styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import SidebarRight from "@/components/layout/SidebarRight";
import SidebarLeft from "@/components/layout/SidebarLeft";
import ScrollToTopButton from "@/components/features/ScrollToTopButton";


export const metadata: Metadata = {
  title: "Crear Next App",
  description: "Generado por crear next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="bg-[#edf2f6]">
        <Navbar />
        <SidebarRight />
        <SidebarLeft />
        <div className="flex justify-center pt-[110px]">
          <div className="max-w-[1250px]">
            {children}
          </div>
        </div>
        <ScrollToTopButton />
      </div>
  );
}
