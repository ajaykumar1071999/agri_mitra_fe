import { createNavigation } from 'next-intl/navigation';

export const locales = ['en', 'hi'];

export const { Link, redirect, usePathname, useRouter } = createNavigation({ locales });
