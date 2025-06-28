import '@telegram-apps/telegram-ui/dist/styles.css'
import 'normalize.css/normalize.css'
import '@styles/tailwind.css'
import '@styles/index.scss'

import type { PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import { getLocale } from 'next-intl/server'
import { Roboto, Roboto_Mono } from 'next/font/google'

import { Root } from '@components'
import { I18nProvider } from '@i18n'

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
})

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'TMA Template',
  description: 'Template for Telegram Mini Apps (Next.js 15, TypeScript, Telegram Ui, Tailwind, SCSS-modules, i18n)',
}

export default async function RootLayout({ children }: PropsWithChildren) {
  const locale = await getLocale()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${roboto.variable} ${robotoMono.variable}`}>
        <I18nProvider>
          <Root>{children}</Root>
        </I18nProvider>
      </body>
    </html>
  )
}