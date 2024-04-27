import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";
import "./globals.css";
import { aboutDetails } from "@/utils/aboutDetails";

const inter = Chakra_Petch({
  subsets: ["latin"],
  weight: ["300", "700"]
});

export const metadata: Metadata = {
  title: "Jordan Griffin - Software Maestro",
  description: aboutDetails,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
