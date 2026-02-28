import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware({
  locales: ['en', 'hi'],
  defaultLocale: 'en',
  localeDetection: true,
});

export default function middleware(request: NextRequest) {
  // 1️⃣ Run next-intl middleware first
  const response = intlMiddleware(request);

  const token = request.cookies.get('token');
  const pathname = request.nextUrl.pathname;

  // 2️⃣ Protect localized dashboard routes
  if (!token && pathname.match(/^\/(en|hi)\/dashboard/)) {
    const locale = pathname.split('/')[1];

    return NextResponse.redirect(new URL(`/${locale}/login`, request.url));
  }

  return response;
}

export const config = {
  matcher: ['/', '/(en|hi)/:path*', '/((?!_next|api|.*\\..*).*)'],
};
