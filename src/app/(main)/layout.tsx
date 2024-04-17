import NextTopLoader from "nextjs-toploader";
import { Toaster } from "sonner";

import Footer from "@/components/sections/footer/footer";
import Navbar from "@/components/sections/navbar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <main className="pt-24 overflow-hidden">{children}</main>
      <Footer />

      <Toaster position="bottom-right" />
      <NextTopLoader color="#e53838" showSpinner={false} />
    </div>
  );
}
