import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  const supportedLocales = ['en', 'hi'];
  const currentLocale = locale && supportedLocales.includes(locale) ? locale : 'en';

  return {
    locale: currentLocale,
    messages: (await import(`../messages/${currentLocale}.json`)).default,
  };
});
