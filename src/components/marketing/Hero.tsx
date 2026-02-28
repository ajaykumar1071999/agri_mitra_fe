'use client';

import { useTranslations } from 'next-intl';
import { useToast } from '@/hooks/useToast';

export default function Hero() {
  const t = useTranslations('hero');
  const toast = useToast();

  return (
    <section
      className="px-6 py-24 text-center 
bg-green-50 dark:bg-gray-900 transition-colors"
    >
      <h1
        className="text-4xl md:text-5xl font-bold 
text-red-700 dark:text-green-400"
      >
        {t('title')}
      </h1>
      <p className="text-black-300 dark:text-gray-300">{t('description')}</p>

      <button
        className="mt-8 px-6 py-3 bg-green-600 text-white rounded-lg"
        onClick={() => toast.success('milkSaved')}
      >
        {t('cta')}
      </button>
    </section>
  );
}
