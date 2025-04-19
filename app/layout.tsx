import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` overflow-x-hidden ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {" "}
        <header className="fixed w-full">
          <Header />
        </header>
        {children}
      </body>
    </html>
  );
}
