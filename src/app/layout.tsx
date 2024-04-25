// import { GeistSans } from "geist/font/sans";
// import { GeistMono } from "geist/font/mono";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.scss";
import PreLoader from "@/components/PreLoader";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import "@/styles/App.scss";
// Fonts
import { IBM_Plex_Mono } from "next/font/google";
import localFont from "next/font/local";

// Google Font
const IBMPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300" ,"400", "500", "600", "700"], // Example weight, adjust as needed
  style: "normal", // Example style, adjust as needed
  variable: "--font-ibm-plex-mono"
});

// Local Font
const neueRegrade = localFont({
  src: [
    {
      path: './public/fonts/Neue Regrade/Neue-Regrade-Regular-BF65af35d81f2ff.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './public/fonts/Neue Regrade/Neue-Regrade-Medium-BF65af35d843ed6.otf',
      weight: '500',
      style: 'medium',
    },
    {
      path: './public/fonts/Neue Regrade/Neue-Regrade-Semibold-BF65af35d8354a8.otf',
      weight: '600',
      style: 'semibold',
    },
    {
      path: './public/fonts/Neue Regrade/Neue-Regrade-Bold-BF65af35d84e111.otf',
      weight: '700',
      style: 'bold',
    }
  ],
  variable: "--font-neueRegrade"
})

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
      className={`dark ${IBMPlexMono.variable} ${neueRegrade.variable}`}
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
