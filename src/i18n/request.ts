import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';
import { Locale } from './types';

export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale: locale as Locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
