import ChatButton from "@/components/ChatButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TopNavbar from "@/components/TopNavbar";
import type { Metadata } from "next";
import { Roboto, Bree_Serif } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import Providers from "./providers";
import Script from "next/script"; // ⬅️ Add this

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] }); // Add desired font weights
const bree_Serif = Bree_Serif({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Robyy",
  description: "ROBYY - Luxury cosmetics, affordable prices",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TFTPCJKW');
          `}
        </Script>
      </head>
      <body className={bree_Serif.className}>
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TFTPCJKW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

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
          <ChatButton />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
