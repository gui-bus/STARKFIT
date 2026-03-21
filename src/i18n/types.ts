import {routing} from './routing';
import messages from '../../messages/en.json';

declare module 'next-intl' {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof messages;
  }
}

export type Locale = (typeof routing.locales)[number];
