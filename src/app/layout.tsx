import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { PageCacheProvider } from "@/lib/pageChacheProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const salsa = localFont({
  src: "./fonts/Salsa-Regular.ttf",
  variable: "--font-salsa",
  weight: "100 900",
});

const mavenPro = localFont({
  src: "./fonts/MavenPro-VariableFont_wght.ttf",
  variable: "--font-maven-pro",
  weight: "100 900",
});

const assistant = localFont({
  src: "./fonts/Assistant-VariableFont_wght.ttf",
  variable: "--font-assistant",
  weight: "100 900",
});
export const metadata: Metadata = {
  title: "Spectract LNCT Fest",
  description:
    "Experience the vibrant fusion of technology, art, and culture at Spectract LNCT Fest. Join us for an electrifying celebration featuring tech exhibitions, cultural performances, workshops, and thrilling competitions.",
  keywords: [
    "Spectract LNCT Fest",
    "LNCT Fest",
    "Tech Fest LNCT",
    "LNCT Events",
    "Spectract Fest 2025",
    "Cultural Fest LNCT",
    "Tech Exhibitions",
    "Workshops LNCT",
    "Competitions LNCT",
    "Innovation & Technology",
    "LNCT College Events",
    "Student Fest LNCT",
  ],

  openGraph: {
    title: "Spectract LNCT Fest",
    description:
      "Experience the vibrant fusion of technology, art, and culture at Spectract LNCT Fest. Engage in thrilling competitions, tech showcases, and cultural performances.",
    url: "https://spectract.vercel.app",
    images: [
      {
        url: "https://spectract.vercel.app/img/spectract_1.jpg",
        width: 1200,
        height: 630,
        alt: "Spectract LNCT Fest - The Ultimate Tech & Cultural Celebration",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    site: "@SpectractLNCT",
    title: "Spectract LNCT Fest",
    description:
      "Join us at Spectract LNCT Fest for an immersive experience in technology, culture, and innovation! Competitions, exhibitions, and performances await.",
    images: "https://spectract.vercel.app/img/spectract_1.jpg",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PageCacheProvider>
        <body
          className={`${geistSans.variable} box-border ${geistMono.variable} ${salsa.variable} ${mavenPro.variable} ${assistant.variable} antialiased overflow-x-hidden hide-scrollbar`}
        >
          {children}
        </body>
      </PageCacheProvider>
    </html>
  );
}
