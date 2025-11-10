import type { Metadata } from "next";
import { Geist, Geist_Mono, Jersey_10 } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jersey = Jersey_10({
  weight: "400",
  variable: "--font-jersy-10",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Felix Abungan",
  description: "Welcome to my Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jersey.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
