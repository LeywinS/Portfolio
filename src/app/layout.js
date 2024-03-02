import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/StarBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Backary Soumare Portfolio",
  description: "Portfolio de Backary Soumare",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
