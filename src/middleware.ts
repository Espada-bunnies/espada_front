import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'ru'];
const defaultLocale = 'ru';

function getLocale(request: NextRequest) {
  const accepted = request.headers.get('accept-language');

  if (accepted === null) {
    return defaultLocale;
  }
  let lang = '';

  locales.forEach((locale) => {
    if (accepted.includes(locale)) {
      lang = locale;
    }
  });

  return lang;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url));
  }
}

export const config = {
  matcher: ['/((?!_next).*)'],
};
