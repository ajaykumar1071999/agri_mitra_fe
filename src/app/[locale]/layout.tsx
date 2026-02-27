import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
// import '../../globals.css';
import '../globals.css';

import OfflineBanner from '@/components/OfflineBanner';
import Providers from '@/providers/Providers';
import ThemeProvider from '@/providers/ThemeProvider';

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

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

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={params.locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <Providers>
              <OfflineBanner />
              {children}
            </Providers>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
