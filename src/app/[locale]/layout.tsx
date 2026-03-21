import { Noto_Sans } from "next/font/google";
import "../globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "../../i18n/routing";
import { notFound } from "next/navigation";

const montserrat = Noto_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "700", "900"] });

export const metadata = {
  title: "STARKFIT | Transforme seu estilo de vida!",
  description:
    "Sua jornada para uma vida saudável começa na STARKFIT. Descubra treinos personalizados, equipamentos modernos e uma comunidade vibrante.",
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const {locale} = params;

  // Ensure that a valid locale is used
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
 
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${montserrat.className} w-full max-w-440 mx-auto bg-background px-4 md:px-10`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <>
            <Header />
            <main className="flex-1 w-full max-w-440 mx-auto">{children}</main>
            <Footer />
          </>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
