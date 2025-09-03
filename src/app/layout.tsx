import '../styles/globals.css'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crear Next App",
  description: "Generado por crear next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="us">
      <head />
      <body>
        {children}
      </body>
    </html>
  )
}
