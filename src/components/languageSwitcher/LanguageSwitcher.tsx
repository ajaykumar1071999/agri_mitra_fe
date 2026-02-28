'use client';

import { useRouter, usePathname } from '@/navigation';
import { useLocale } from 'next-intl';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => switchLocale('en')}
        className={`px-3 py-1 rounded-md text-sm cursor-pointer ${
          locale === 'en' ? 'bg-green-600 text-white' : 'bg-gray-200 dark:bg-gray-700'
        }`}
      >
        EN
      </button>

      <button
        onClick={() => switchLocale('hi')}
        className={`px-3 py-1 rounded-md text-sm cursor-pointer ${
          locale === 'hi' ? 'bg-green-600 text-white' : 'bg-gray-200 dark:bg-gray-700'
        }`}
      >
        हिन्दी
      </button>
    </div>
  );
}
