import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {NavLinks} from './app/components/nav-links'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  team,
  analytics
}: Readonly<{
  children: React.ReactNode,
  team: React.ReactNode,
  analytics: React.ReactNode 
}>) {
  return (
    <html lang="en">
      <body id="body" className={inter.className}>
        
      <NavLinks>
        <div>just for test</div>
      </NavLinks>
     
        <main>{children}</main>
        <main>{team}</main>
        <main>{analytics}</main>
      </body>
    </html>
  );
}