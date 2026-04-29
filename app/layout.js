import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/shared/Header";
import Footer from "./components/shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lending Library - Your Digital Book Library",
  description:
    "Explore thousands of books, discover new authors, and enjoy reading anytime with Boighor – your personal online library.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="min-h-[calc(100vh-556px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
