"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import { MantineProvider, ColorSchemeScript, createTheme } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { NavigationProgress } from "@mantine/nprogress";
import "$/static/style/root.scss";
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = createTheme({
    primaryColor: "x",
    colors: {
      x: [
        "#fff",
        "#fff",
        "#fff",
        "#fff",
        "#fff",
        "#fff",
        "#fff",
        "#fff",
        "#fff",
        "#fff",
      ],
    },
  });

  return (
    <html lang="en">
      {/* <head></head> */}
      <Head>
        <ColorSchemeScript />
      </Head>
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

export const metadata: Metadata = {
  title: "永远少年",
  description: "永远不要失去前进的脚步, 与赴死的勇气",
};
