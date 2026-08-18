import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GWM CMS",
  description: "GWM Middle East content operations MVP.",
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
