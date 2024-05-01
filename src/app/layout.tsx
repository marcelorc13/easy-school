import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Easy School",
  description: "App de organização de notas da faculdae",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
