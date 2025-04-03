import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import  {HEADER} from "../components/header"



 
export const metadata: Metadata = {
  title: 'META DATA TOTAL',
  description: 'aprenda a usare o meta daata',
}
 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        <HEADER/>
        {children}
      </body>
    </html>
  );
}
