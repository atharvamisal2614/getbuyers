import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NextTopLoader from "nextjs-toploader";
import { FaWhatsappSquare, FaPhoneSquareAlt } from "react-icons/fa";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Get Buyers",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <Navbar />
        <NextTopLoader 
          color="#2563eb"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          template='<div class="bar" role="bar"><div class="peg"></div></div> 
          <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
          zIndex={1600}
          showAtBottom={false}
        />
        {children}

        <div className="fixed hover:cursor-pointer bottom-5 z-50 right-2 flex flex-col items-center space-y-2">
        {/* Call Icon */}
        <Link href="tel:+919322177366">
          <FaPhoneSquareAlt className="text-blue-600 bg-blue-50 animate-pulse" size={45} />
        </Link>
        {/* WhatsApp Icon */}
        <Link href="https://wa.me/919322177366">
          <FaWhatsappSquare className="text-blue-600 bg-blue-50 animate-pulse" size={45} />
        </Link>
      </div>

   




        <Footer />
      </body>
    </html>
  );
}
