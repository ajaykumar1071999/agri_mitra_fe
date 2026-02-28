'use client';

import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import ThemeToggle from '@/components/ThemeToggle';
import LanguageSwitcher from '@/components/languageSwitcher/LanguageSwitcher';

export default function Navbar() {
  const t = useTranslations('navbar');

  return (
    <header
      className="
      w-full px-6 py-4 
      flex justify-between items-center
      bg-white dark:bg-gray-900
      border-b border-gray-200 dark:border-gray-800
      transition-colors duration-300
    "
    >
      {/* Logo */}
      <Link href="/" className="text-xl font-bold text-green-600 dark:text-green-400">
        AgriMitra
      </Link>

      {/* Right Side */}
      <div className="flex items-center gap-6">
        <Link
          href="#features"
          className="
          text-gray-700 dark:text-gray-300
          hover:text-green-600 dark:hover:text-green-400
          transition-colors
        "
        >
          {t('features')}
        </Link>

        <ThemeToggle />

        <Link
          href="/login"
          className="
          px-4 py-2 rounded-lg
          bg-green-600 hover:bg-green-700
          dark:bg-green-500 dark:hover:bg-green-600
          text-white
          transition-colors
        "
        >
          {t('login')}
        </Link>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
