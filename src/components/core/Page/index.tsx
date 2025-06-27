'use client'

import { FC, type PropsWithChildren, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { backButton } from '@telegram-apps/sdk-react'

interface PageProps extends PropsWithChildren {
  showBackButton?: boolean
}

const Page: FC<PageProps> = ({ children, showBackButton = true }) => {
  const router = useRouter()

  useEffect(() => {
    showBackButton ? backButton.show() : backButton.hide()
  }, [showBackButton])

  useEffect(() => {
    return backButton.onClick(() => router.back())
  }, [router])

  return (
    <>{children}</>
  )
}

export { Page }