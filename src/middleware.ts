import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - API routes
  // - Static files (_next/static, _next/image, favicon.ico)
  // - Any files with an extension (e.g. .svg, .png)
  matcher: ['/((?!api|_next|.*\\..*).*)']
};