import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "DLAR / DEV — Full-Stack Developer & Elementor Expert",
  description: "Portfolio of a Mid Full-Stack Developer and Elementor Expert building Shopify and WordPress experiences.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
