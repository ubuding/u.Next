import Navbar from "#/Navbar";
import "./layout.scss";
export default function ModulesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="layout module-layout">
      <Navbar />
      <div className="module-wrap">{children}</div>
    </div>
  );
}
