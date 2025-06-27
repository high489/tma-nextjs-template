import messages from '@public/locales/en.json'
import type { Locale } from '@models'

declare module 'next-intl' {
  interface AppConfig {
    Locale: Locale
    Messages: typeof messages
  }
}