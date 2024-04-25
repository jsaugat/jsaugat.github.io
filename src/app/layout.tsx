// import { GeistSans } from "geist/font/sans";
// import { GeistMono } from "geist/font/mono";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.scss";
import PreLoader from "@/components/PreLoader";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import "@/styles/App.scss";
import { IBM_Plex_Mono } from "@next/font/google";

const IBMPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: "400", // Example weight, adjust as needed
  style: "normal", // Example style, adjust as needed
  variable: "--font-ibm-plex-mono"
});

export const metadata: Metadata = {
  title: "Saugat",
  description: "Personal Portfolio 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${IBMPlexMono.variable} font-plexMono`}
    >
      <head></head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PreLoader />
          <main className="app relative h-screen w-full">
            <Navbar />
            <Container>{children}</Container>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
