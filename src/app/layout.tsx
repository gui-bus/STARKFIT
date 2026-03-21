import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "STARKFIT | Transforme seu estilo de vida!",
  description:
    "Sua jornada para uma vida saudável começa na STARKFIT. Descubra treinos personalizados, equipamentos modernos e uma comunidade vibrante.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.className} w-full max-w-440 mx-auto `}>
        <Header />
        <main className="flex-1 w-full max-w-440 mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
