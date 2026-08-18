import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GWM Middle East",
  description: "GWM Middle East digital platform MVP.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
