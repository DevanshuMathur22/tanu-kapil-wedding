import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tanu & Kapil | Wedding Celebration",
  description: "A royal celebration of love, traditions and togetherness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
