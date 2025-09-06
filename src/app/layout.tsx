import '../styles/globals.css'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social networrk template",
  description: "Social network template for Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head />
      <body>
        {children}
      </body>
    </html>
  )
}
