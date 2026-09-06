import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fearless Comedy Film Festival",
  description: "A festival celebrating bold, fearless comedy filmmaking.",
  icons: {
    icon: "/assets/logo-white.png",
    shortcut: "/assets/logo-white.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
