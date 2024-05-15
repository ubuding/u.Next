import Navbar from "#/Navbar";
export default function ModulesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="module-layout">
      <Navbar />
      {children}
    </div>
  );
}
