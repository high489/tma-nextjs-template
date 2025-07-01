'use client'

import { useState } from 'react'
import { themeParams, useSignal } from '@telegram-apps/sdk-react'
import { List } from '@telegram-apps/telegram-ui'

import { DisplayData, Page, TgButton } from '@components'
import { classNames } from '@styles'

export default function ThemeParamsPage() {
  const [showPalette, setShowPalette] = useState<boolean>()
  const tp = useSignal(themeParams.state)

  return (
    <Page>
      <TgButton
        mode='filled'
        size='m'
        className={classNames(
          'w-[97vw]'
        )}
        onClick={() => setShowPalette(!showPalette)}
      >
        Show Palette
      </TgButton>
      <List style={{ display: showPalette ? 'block' : 'none' }}>
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