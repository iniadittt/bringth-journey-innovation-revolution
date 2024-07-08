import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bringth Journey Innovation & Revolution | BJIR",
  description:
    "Our Community to become a reliable developer but lazy at coding",
  publisher: "BJIR",
  creator: "BJIR",
  category: "Community",
  keywords: [
    "BJIR",
    "BJIR Geming",
    "Bringth Journey Innovation & Revolution",
    "Community",
    "Programming",
    "Developer",
    "Lazy Dev",
    "Coding",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
