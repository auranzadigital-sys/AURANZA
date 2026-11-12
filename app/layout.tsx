import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Auranza® — Independent Digital Growth Studio",
  description: "Auranza brings strategy, creativity and digital performance together to help ambitious brands move forward.",
  metadataBase: new URL("https://auranza-ten.vercel.app"),
  openGraph: { title: "Auranza® — Independent Digital Growth Studio", description: "Strategy, creative and digital growth for ambitious brands.", type: "website" }
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
