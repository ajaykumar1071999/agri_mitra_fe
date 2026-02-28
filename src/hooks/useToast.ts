'use client';

import { useTranslations } from 'next-intl';
import { showToast } from '@/lib/toast';

export function useToast() {
  const t = useTranslations('toast');

  return {
    success: (key: string) => showToast(t(key), 'success'),
    error: (key: string) => showToast(t(key), 'error'),
    info: (key: string) => showToast(t(key), 'info'),
    warning: (key: string) => showToast(t(key), 'warning'),
  };
}
