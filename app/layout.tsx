import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";

const baiJamjuree = Bai_Jamjuree({
  variable: "--font-bai-jamjuree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Happy Hour da Gerência de Projetos",
  description: "Happy Hour da Gerência de Projetos — 15/07/2026",
  icons: {
    icon: "/company_logo_blue.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${baiJamjuree.variable} h-full`}>
      <body>{children}</body>
    </html>
  );
}
