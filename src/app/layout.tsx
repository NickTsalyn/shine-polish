import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shine&Polish",
  description: "Cleaning service Atlanta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
