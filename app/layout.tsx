import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://auranzapk.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Auranza® — Independent Digital Growth Studio",
    template: "%s | Auranza®",
  },
  description:
    "Auranza brings strategy, creativity and digital performance together to help ambitious brands move forward.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Auranza® — Independent Digital Growth Studio",
    description: "Strategy, creative and digital growth for ambitious brands.",
    url: siteUrl,
    siteName: "Auranza",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auranza® — Independent Digital Growth Studio",
    description: "Strategy, creative and digital growth for ambitious brands.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
