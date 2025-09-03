import type { Metadata } from "next";
import "../../styles/globals.css";
import Navbar from "@/components/Navbar";
import SidebarRight from "@/components/SidebarRight";
import SidebarLeft from "@/components/SidebarLeft";
import ScrollToTopButton from "@/components/ScrollToTopButton";


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
    <html lang="es">
      <body className="bg-[#edf2f6]">
        <Navbar />
        <SidebarRight />
        <SidebarLeft />
        <div className="flex justify-center pt-[110px]">
          <div className="max-w-[1250px]">
            {children}
          </div>
        </div>
        <ScrollToTopButton />
      </body>
    </html>
  );
}
