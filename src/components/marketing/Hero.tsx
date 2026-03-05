'use client';

import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section
      className="relative h-[90vh] flex items-center"
      style={{
        backgroundImage: "url('/farmer.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 text-white">
        <p className="mb-4 text-lg opacity-90">{t('tagline')}</p>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{t('title')}</h1>

        <p className="max-w-xl text-lg mb-8 opacity-90">{t('description')}</p>

        <div className="flex gap-4 flex-wrap">
          <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg">
            {t('about')}
          </button>

          <button className="bg-white text-green-700 px-6 py-3 rounded-lg">{t('join')}</button>
        </div>
      </div>
    </section>
  );
}
