import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { createTheme, MantineProvider, ColorSchemeScript } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { NavigationProgress } from "@mantine/nprogress";
import { useTheme } from "~/hooks/useTheme";

import "~/style/root.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "永远少年",
  description: "ubuding github",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = useTheme();
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider theme={theme}>
          <Notifications
            position="top-right"
            styles={{
              notification: {
                backgroundColor: "#000",
              },
            }}
          />
          <NavigationProgress />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
