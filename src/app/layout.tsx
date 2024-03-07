import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import UIProvider from "../../providers/UIProvider";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SparkFit | Transforme seu estilo de vida!",
  description: "Sua jornada para uma vida saudável começa na SparkFit. Descubra treinos personalizados, equipamentos modernos e uma comunidade vibrante.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.className} maxContainer`}>
        <UIProvider>
          <Header />
          <main className="flex-1">{children}</main>
        </UIProvider>
      </body>
    </html>
  );
}
