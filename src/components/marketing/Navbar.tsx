'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import ThemeToggle from '@/components/ThemeToggle';

export default function Navbar() {
  const t = useTranslations('navbar');

  return (
    <header className="w-full px-6 py-4 flex justify-between items-center bg-white dark:bg-gray-900 shadow-sm">
      <Link href="/" className="text-xl font-bold text-green-600">
        AgriMitra
      </Link>

      <div className="flex items-center gap-4">
        <Link href="#features" className="hover:text-green-600">
          {t('features')}
        </Link>

        <ThemeToggle />

        <Link href="/login" className="px-4 py-2 bg-green-600 text-white rounded-lg">
          {t('login')}
        </Link>
      </div>
    </header>
  );
}
