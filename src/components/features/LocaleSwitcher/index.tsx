'use client'

import { Select } from '@telegram-apps/telegram-ui'
import { useLocale } from 'next-intl'
import { FC } from 'react'

import { localesMap, setLocale } from '@i18n'
import type { Locale } from '@models'

export const LocaleSwitcher: FC = () => {
  const locale = useLocale()

  const onChange = (value: string) => {
    const locale = value as Locale
    setLocale(locale)
  }

  return (
    <Select value={locale} onChange={({ target }) => onChange(target.value)}>
      {localesMap.map((locale) => (
        <option key={locale.key} value={locale.key}>{locale.title}</option>
      ))}
    </Select>
  )
}
