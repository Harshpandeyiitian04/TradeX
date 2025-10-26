import Header from "@/components/header/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen text-gray-400">
        <Header/>
        <div className="container py-10">
            {children}
        </div>
    </main>
  );
}