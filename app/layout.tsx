import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
      template: '%s | UI Battlegrounds',
      default: 'UI Battlegrounds',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex flex-col items-center justify-center flex-grow py-10 my-10">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
