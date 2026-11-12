import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Auranza — Digital that moves business forward", description: "Auranza helps ambitious brands grow through strategy, creative, performance marketing and digital experiences.", metadataBase: new URL("https://auranza.com"), openGraph: { title: "Auranza — Digital that moves business forward", description: "Strategy, creative and performance for ambitious brands.", type: "website" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
