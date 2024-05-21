import RootLayoutIndex from "$/layout/RootLayout";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootLayoutIndex>{children}</RootLayoutIndex>;
}
