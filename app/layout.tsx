import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "../components/theme-provider" 

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Abdelsamie Elazazy - Software Engineer & IT Risk Specialist",
  description:
    "Computer Science student at German International University Cairo, specializing in Software Engineering. Currently gaining valuable experience as an IT Risk Intern at Banque du Caire.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider> {/* ✅ WRAPPED HERE */}
      </body>
    </html>
  )
}
