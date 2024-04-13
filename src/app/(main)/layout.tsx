import Navbar from "@/components/sections/navbar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <main className="pt-24">{children}</main>
    </div>
  );
}