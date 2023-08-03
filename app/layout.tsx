import './globals.css'
import type { Metadata } from 'next'
import localFont from "next/font/local"

const GeneralSans = localFont({
  src:"../assets/fonts/GeneralSans-Variable.ttf",
  display:"swap"
})

export const metadata: Metadata = {
  title: 'Godswill Ezihe | Personal Portfolio',
  description: 'Godswill Ezihe\'s Portfolio Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeneralSans.className}>
      <body >{children}</body>
    </html>
  )
}
