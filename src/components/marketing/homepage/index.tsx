'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function HomePage() {
  const t = useTranslations();

  return (
    <main className="bg-white dark:bg-gray-900 transition-colors">
      {/* HERO */}
      <section className="bg-green-600 dark:bg-green-800 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('hero.title')}</h1>

            <p className="text-lg opacity-90 mb-6">{t('hero.subtitle')}</p>

            <button className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:opacity-90">
              {t('hero.cta')}
            </button>
          </div>

          <Image src="/farmer.jpg" width={500} height={400} alt="Farmer" className="rounded-xl" />
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            {t('services.title')}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                {t('services.dairy')}
              </h3>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                {t('services.schemes')}
              </h3>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                {t('services.advisory')}
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <Image src="/farm.jpg" width={500} height={400} alt="Farm" className="rounded-xl" />

          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              {t('about.title')}
            </h2>

            <p className="text-gray-600 dark:text-gray-300">{t('about.desc')}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
