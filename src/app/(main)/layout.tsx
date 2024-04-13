import Navbar from "@/components/sections/navbar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <main className="py-32 md:py-36">{children}</main>
    </div>
  );
}
