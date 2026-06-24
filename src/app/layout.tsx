import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Artisan Beaded Hats | Handcrafted Snapbacks",
  description: "Bold color. Artisan detail. Limited collection. One-of-a-kind handcrafted beaded snapbacks.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
