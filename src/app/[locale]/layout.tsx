import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
// import '../../globals.css';
import '../globals.css';
// import GoogleProvider from '@/providers/GoogleProvider';

import OfflineBanner from '@/components/OfflineBanner';
import Providers from '@/providers/Providers';
import ThemeProvider from '@/providers/ThemeProvider';

import { NextIntlClientProvider } from 'next-intl';
import Script from 'next/script';
import { Toaster } from 'sonner';
// import Navbar from '@/components/marketing/Navbar';
// import Footer from '@/components/marketing/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'AgriMitra',
  description: 'Smart dairy & rural business management platform',
};

export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { children, params } = props;
  const { locale } = await params;

  const messages = (await import(`../../messages/${locale}.json`)).default;
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable}
        min-h-screen flex flex-col
  antialiased
  bg-white text-gray-900
  dark:bg-gray-950 dark:text-gray-100
  transition-colors duration-300`}
      >
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider>
            <Providers>
              <OfflineBanner />
              <main className="flex-1" suppressHydrationWarning>
                {children}
              </main>
              <Toaster position="top-right" richColors closeButton theme="system" />
            </Providers>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
