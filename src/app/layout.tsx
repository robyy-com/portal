import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TopNavbar from "@/components/TopNavbar";
import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] }); // Add desired font weights

export const metadata: Metadata = {
  title: "Robyy Jewelry",
  description: "Family Jewelry Collection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>
          <ToastContainer />
          <div className=" sticky top-0 bg-white z-10 px-2.5 xl:px-0">
            <div className="pt-6 container mx-auto">
              <TopNavbar />
              <Navbar />
            </div>
          </div>

          <div className="px-2.5 xl:px-0 min-h-[calc(75vh-220px)]">
            {children}
          </div>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
