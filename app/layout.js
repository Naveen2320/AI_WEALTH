import { Inter } from "next/font/google";
import "./globals.css";
import Header from '../components/header';
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI_WEALTH",
  description: "Once stop Finance Platfrom",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider forceRedirectUrl="/dashboard">

    <html lang="en">
      <body
        className={`${inter.className}`}>
        {/* HEADER */}
        <Header></Header>

          <main className="min-h-screen">{children}</main>
          <Toaster richColors/>
        {/* FOOTER */}

        <footer className="bg-blue-50 py-12">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>Made with 💗 by Naveen Kumar</p>
          </div>
        </footer>
      </body>
      </html>
      
      </ClerkProvider>
  );
}
