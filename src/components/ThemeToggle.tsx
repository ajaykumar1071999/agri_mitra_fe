'use client';

import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  if (!resolvedTheme) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="px-4 py-2 rounded-lg border 
      border-gray-300 dark:border-gray-700 
      bg-white dark:bg-gray-800 
      text-gray-900 dark:text-gray-100 
      transition-colors"
    >
      {isDark ? '☀ Light' : '🌙 Dark'}
    </button>
  );
}
