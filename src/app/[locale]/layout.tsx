import { Noto_Sans } from "next/font/google";
import "../globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "../../i18n/routing";
import { notFound } from "next/navigation";

const montserrat = Noto_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "700", "900"] });

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const { locale } = params;
  const messages: any = await getMessages({ locale });
  const t = messages.Metadata;

  return {
    title: t.title,
    description: t.description,
  };
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  const { locale } = params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
 
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${montserrat.className} w-full max-w-440 mx-auto bg-background px-4 md:px-10`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Header />
          <main className="flex-1 w-full max-w-440 mx-auto">{props.children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
