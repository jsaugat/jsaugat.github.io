import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "@/styles/globals.css";
import PreLoader from "@/components/PreLoader";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import "@/styles/App.scss";

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
      className="dark"
      // className={`dark ${GeistSans.variable} ${GeistMono.variable}`}
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
          <Container>
            <main className="app relative h-screen w-full">
              <Navbar />
              {children}
            </main>
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
