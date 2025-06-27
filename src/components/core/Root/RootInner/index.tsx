'use client'

import { FC, type PropsWithChildren, useEffect } from 'react'
import { initData, miniApp, useLaunchParams, useSignal } from '@telegram-apps/sdk-react'
import { TonConnectUIProvider } from '@tonconnect/ui-react'
import { AppRoot } from '@telegram-apps/telegram-ui'

import { setLocale } from '@i18n'

const RootInner: FC<PropsWithChildren> = ({ children }) => {
  const lp = useLaunchParams()
  const isDark = useSignal(miniApp.isDark)
  const initDataUser = useSignal(initData.user)

  useEffect(() => {
    // Set app locale from Telegram user settings
    initDataUser && setLocale(initDataUser.language_code)
  }, [initDataUser])

  useEffect(() => {
    // Set up font depending on platform
    document.body.classList.toggle('apple-font', ['ios', 'macos'].includes(lp.tgWebAppPlatform))
  }, [lp.tgWebAppPlatform])

  return (
    <TonConnectUIProvider manifestUrl='/tonconnect-manifest.json'>
      <AppRoot
        appearance={isDark ? 'dark' : 'light'}
        platform={['macos', 'ios'].includes(lp.tgWebAppPlatform) ? 'ios' : 'base'}
      >
        {children}
      </AppRoot>
    </TonConnectUIProvider>
  )
}

export { RootInner }