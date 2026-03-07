'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="
        flex items-center gap-2
        px-3 py-2 lg:px-4
        rounded-lg border
        border-gray-300 dark:border-gray-700
        bg-white dark:bg-gray-800
        text-gray-900 dark:text-gray-100
        transition-colors cursor-pointer
      "
    >
      {/* Icon */}
      <span className="text-lg">{isDark ? '☀️' : '🌙'}</span>

      {/* Text only on desktop */}
      <span className="hidden lg:inline">{isDark ? 'Light' : 'Dark'}</span>
    </button>
  );
}
