'use client';

import { useState } from 'react';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import ThemeToggle from '@/components/ThemeToggle';
import LanguageSwitcher from '@/components/languageSwitcher/LanguageSwitcher';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const t = useTranslations('navbar');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 transition-colors">
      <div className="px-4 lg:px-8">
        {/* Top Row */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-green-600 dark:text-green-400">
            AgriMitra
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <ThemeToggle />

            <LanguageSwitcher />

            <Link
              href="/"
              className="w-full text-center px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white"
              onClick={() => setIsOpen(false)}
            >
              {t('logout')}
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-4 pb-6 pt-2">
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>

            <Link
              href="/"
              className="w-full text-center px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white"
              onClick={() => setIsOpen(false)}
            >
              {t('logout')}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
