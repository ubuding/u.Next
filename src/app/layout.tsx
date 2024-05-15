import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { createTheme, MantineProvider, ColorSchemeScript } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { NavigationProgress } from "@mantine/nprogress";
import "src/style/root.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ubuding",
  description: "ubuding next",
};
const theme = createTheme({
  colors: {
    X: [
      "rgba(29, 9, 46, 1)",
      "rgba(29, 9, 46, 0.9)",
      "rgba(29, 9, 46, 0.8)",
      "rgba(29, 9, 46, 0.7)",
      "rgba(29, 9, 46, 0.6)",
      "rgba(29, 9, 46, 0.5)",
      "rgba(29, 9, 46, 0.4)",
      "rgba(29, 9, 46, 0.3)",
      "rgba(29, 9, 46, 0.2)",
      "rgba(29, 9, 46, 0.1)",
    ],
  },
  primaryColor: "violet",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
