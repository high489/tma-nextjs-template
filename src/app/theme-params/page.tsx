'use client'

import { themeParams, useSignal } from '@telegram-apps/sdk-react'
import { List } from '@telegram-apps/telegram-ui'

import { DisplayData, Page } from '@components'

export default function ThemeParamsPage() {
  const tp = useSignal(themeParams.state)

  return (
    <Page>
      <List>
        <DisplayData
          rows={Object.entries(tp).map(([title, value]) => ({
            title: title
              .replace(/[A-Z]/g, (m) => `_${m.toLowerCase()}`)
              .replace(/background/, 'bg'),
            value,
          }))}
        />
      </List>
    </Page>
  )
}