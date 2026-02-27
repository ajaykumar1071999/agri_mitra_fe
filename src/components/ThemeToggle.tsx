'use client';

import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const currentTheme = resolvedTheme ?? theme;

  if (!currentTheme) return null;

  return (
    <button
      onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
      className="px-3 py-2 border rounded-lg"
    >
      {currentTheme === 'dark' ? '☀ Light' : '🌙 Dark'}
    </button>
  );
}
