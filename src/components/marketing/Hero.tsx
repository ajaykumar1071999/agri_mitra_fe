'use client';

import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="px-6 py-24 text-center bg-green-50 dark:bg-gray-900">
      <h1 className="text-4xl md:text-5xl font-bold text-green-700 dark:text-green-400">
        {t('title')}
      </h1>
      <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
        {t('description')}
      </p>

      <button className="mt-8 px-6 py-3 bg-green-600 text-white rounded-lg">{t('cta')}</button>
    </section>
  );
}
